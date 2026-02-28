import { useState, useEffect, useCallback } from 'react';
import { texts } from './data/texts';
import { dictionary } from './data/dictionary';
import { quizzes } from './data/quizzes';
import { 
  Volume2, 
  VolumeX, 
  GraduationCap, 
  ChevronDown, 
  CheckCircle, 
  XCircle, 
  Clock,
  BookOpen,
  PenTool,
  Award,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import './App.css';

type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface TooltipState {
  visible: boolean;
  text: string;
  x: number;
  y: number;
}

interface QuizState {
  isActive: boolean;
  currentQuestion: number;
  score: number;
  timeLeft: number;
  selectedAnswer: number | null;
  showResult: boolean;
  answers: boolean[];
}

function App() {
  const [selectedLevel, setSelectedLevel] = useState<Level>('A1');
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, text: '', x: 0, y: 0 });
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const [quiz, setQuiz] = useState<QuizState>({
    isActive: false,
    currentQuestion: 0,
    score: 0,
    timeLeft: 20,
    selectedAnswer: null,
    showResult: false,
    answers: []
  });

  const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const currentQuiz = quizzes.find(q => q.level === selectedLevel);

  useEffect(() => {
    const text = texts.find(t => t.level === selectedLevel) || texts[0];
    setCurrentText(text);
  }, [selectedLevel]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (quiz.isActive && quiz.timeLeft > 0 && !quiz.showResult) {
      interval = setInterval(() => {
        setQuiz(prev => {
          if (prev.timeLeft <= 1) {
            return handleNextQuestion(prev, false);
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quiz.isActive, quiz.timeLeft, quiz.showResult]);

  const handleNextQuestion = (currentQuizState: QuizState, isCorrect: boolean): QuizState => {
    const newAnswers = [...currentQuizState.answers, isCorrect];
    const newScore = isCorrect ? currentQuizState.score + 1 : currentQuizState.score;
    
    if (currentQuizState.currentQuestion >= 4) {
      return {
        ...currentQuizState,
        score: newScore,
        answers: newAnswers,
        showResult: true
      };
    }
    
    return {
      ...currentQuizState,
      currentQuestion: currentQuizState.currentQuestion + 1,
      score: newScore,
      timeLeft: 20,
      selectedAnswer: null,
      answers: newAnswers
    };
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!currentQuiz || quiz.selectedAnswer !== null) return;
    
    const isCorrect = answerIndex === currentQuiz.questions[quiz.currentQuestion].correctAnswer;
    setQuiz(prev => handleNextQuestion({ ...prev, selectedAnswer: answerIndex }, isCorrect));
  };

  const startQuiz = () => {
    setQuiz({
      isActive: true,
      currentQuestion: 0,
      score: 0,
      timeLeft: 20,
      selectedAnswer: null,
      showResult: false,
      answers: []
    });
  };

  const resetQuiz = () => {
    setQuiz({
      isActive: false,
      currentQuestion: 0,
      score: 0,
      timeLeft: 20,
      selectedAnswer: null,
      showResult: false,
      answers: []
    });
  };

  const speakText = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(currentText.content);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  const handleWordClick = useCallback((word: string, event: React.MouseEvent) => {
    const cleanWord = word.toLowerCase().replace(/[^a-zğüşıöç]/g, '');
    const translation = dictionary[cleanWord];
    
    if (translation) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      setTooltip({
        visible: true,
        text: translation,
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
      
      setTimeout(() => {
        setTooltip(prev => ({ ...prev, visible: false }));
      }, 2500);
    }
  }, []);

  const renderTextWithClickableWords = (text: string) => {
    const words = text.split(/(\s+)/);
    return words.map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[^a-zğüşıöç]/g, '');
      const hasTranslation = dictionary[cleanWord];
      
      if (hasTranslation && word.trim()) {
        return (
          <span
            key={index}
            className="clickable-word"
            onClick={(e) => handleWordClick(word, e)}
          >
            {word}
          </span>
        );
      }
      return <span key={index}>{word}</span>;
    });
  };

  const getLevelColor = (level: Level) => {
    const colors: Record<Level, string> = {
      'A1': 'bg-green-500',
      'A2': 'bg-emerald-500',
      'B1': 'bg-blue-500',
      'B2': 'bg-indigo-500',
      'C1': 'bg-purple-500',
      'C2': 'bg-rose-500'
    };
    return colors[level];
  };

  const getLevelDescription = (level: Level) => {
    const descriptions: Record<Level, string> = {
      'A1': 'Başlangıç',
      'A2': 'Temel',
      'B1': 'Orta',
      'B2': 'Orta Üstü',
      'C1': 'İleri',
      'C2': 'Uzman'
    };
    return descriptions[level];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800 leading-tight">Serkan Hoca</h1>
                <p className="text-xs text-slate-500">İngilizce Öğrenim Platformu</p>
              </div>
            </div>
            
            {/* Level Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLevelDropdown(!showLevelDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <span className={`w-3 h-3 rounded-full ${getLevelColor(selectedLevel)}`}></span>
                <span className="font-semibold text-slate-700">{selectedLevel}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">{getLevelDescription(selectedLevel)}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showLevelDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showLevelDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => {
                        setSelectedLevel(level);
                        setShowLevelDropdown(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors ${selectedLevel === level ? 'bg-blue-50' : ''}`}
                    >
                      <span className={`w-3 h-3 rounded-full ${getLevelColor(level)}`}></span>
                      <span className="font-medium text-slate-700">{level}</span>
                      <span className="text-xs text-slate-400 ml-auto">{getLevelDescription(level)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {!quiz.isActive ? (
          <div className="space-y-6">
            {/* Text Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getLevelColor(selectedLevel)} mb-2`}>
                      {selectedLevel}
                    </span>
                    <h2 className="text-xl font-bold text-slate-800">{currentText.title}</h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={speakText}
                      className={`p-3 rounded-xl transition-all active:scale-95 ${
                        isPlaying 
                          ? 'bg-blue-100 text-blue-600 shadow-inner' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                      title={isPlaying ? 'Durdur' : 'Sesli Oku'}
                    >
                      {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={startQuiz}
                      className="p-3 rounded-xl bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-all active:scale-95"
                      title="Seviye Testi"
                    >
                      <PenTool className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-lg leading-relaxed text-slate-700">
                  {renderTextWithClickableWords(currentText.content)}
                </p>
              </div>
              
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <p className="text-sm text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  Kelimelerin Türkçe anlamlarını görmek için üzerlerine dokunun
                </p>
              </div>
            </div>

            {/* Features Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Volume2 className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Sesli Okuma</h3>
                <p className="text-sm text-slate-500">Doğru telaffuz için hoparlör ikonuna dokunun</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Anlık Çeviri</h3>
                <p className="text-sm text-slate-500">Kelimelere dokunarak Türkçe anlamlarını görün</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Seviye Testi</h3>
                <p className="text-sm text-slate-500">Bilginizi test etmek için kalem ikonuna dokunun</p>
              </div>
            </div>
          </div>
        ) : (
          /* Quiz Interface */
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {!quiz.showResult ? (
              <>
                {/* Quiz Header */}
                <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-indigo-50 to-white">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-800">Seviye Testi</h2>
                    <button
                      onClick={resetQuiz}
                      className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1"
                    >
                      <RotateCcw className="w-4 h-4" />
                      İptal
                    </button>
                  </div>
                  
                  {/* Progress */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-slate-600">
                      Soru {quiz.currentQuestion + 1}/5
                    </span>
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 transition-all duration-300"
                        style={{ width: `${((quiz.currentQuestion + 1) / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Timer */}
                  <div className={`flex items-center gap-2 text-sm font-medium ${
                    quiz.timeLeft <= 5 ? 'text-red-500' : 'text-slate-600'
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span>{quiz.timeLeft} saniye</span>
                  </div>
                </div>

                {/* Question */}
                {currentQuiz && (
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-slate-800 mb-6">
                      {currentQuiz.questions[quiz.currentQuestion].question}
                    </h3>
                    
                    <div className="space-y-3">
                      {currentQuiz.questions[quiz.currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={quiz.selectedAnswer !== null}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            quiz.selectedAnswer === null
                              ? 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50'
                              : quiz.selectedAnswer === index
                                ? index === currentQuiz.questions[quiz.currentQuestion].correctAnswer
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-red-500 bg-red-50'
                                : index === currentQuiz.questions[quiz.currentQuestion].correctAnswer
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-slate-200 opacity-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                              quiz.selectedAnswer === null
                                ? 'bg-slate-100 text-slate-600'
                                : quiz.selectedAnswer === index
                                  ? index === currentQuiz.questions[quiz.currentQuestion].correctAnswer
                                    ? 'bg-green-500 text-white'
                                    : 'bg-red-500 text-white'
                                  : index === currentQuiz.questions[quiz.currentQuestion].correctAnswer
                                    ? 'bg-green-500 text-white'
                                    : 'bg-slate-100 text-slate-400'
                            }`}>
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span className="flex-1">{option}</span>
                            {quiz.selectedAnswer === index && (
                              index === currentQuiz.questions[quiz.currentQuestion].correctAnswer
                                ? <CheckCircle className="w-5 h-5 text-green-500" />
                                : <XCircle className="w-5 h-5 text-red-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Quiz Results */
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Test Tamamlandı!</h2>
                <p className="text-slate-500 mb-6">
                  {selectedLevel} seviyesindeki testi bitirdiniz
                </p>
                
                <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {quiz.score}/5
                  </div>
                  <p className="text-slate-600">
                    {quiz.score === 5 ? 'Mükemmel!' : 
                     quiz.score >= 3 ? 'İyi iş!' : 
                     'Biraz daha çalışmalısınız'}
                  </p>
                </div>
                
                {/* Question Review */}
                <div className="text-left mb-6 space-y-2">
                  <p className="text-sm font-medium text-slate-700 mb-3">Soru Özeti:</p>
                  {quiz.answers.map((isCorrect, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-slate-600">Soru {index + 1}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors active:scale-95"
                >
                  <ArrowRight className="w-5 h-5" />
                  Metne Dön
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Tooltip */}
      {tooltip.visible && (
        <div 
          className="fixed z-50 px-4 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-xl animate-in fade-in zoom-in-95"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)'
          }}
        >
          {tooltip.text}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800"></div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-sm text-slate-400">
        <p>Serkan Hoca İngilizce Öğrenim Platformu</p>
      </footer>
    </div>
  );
}

export default App;
