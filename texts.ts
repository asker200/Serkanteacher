export interface Text {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  title: string;
  content: string;
}

export const texts: Text[] = [
  {
    id: 'a1-1',
    level: 'A1',
    title: 'My Family',
    content: 'I have a small family. My mother is a teacher. My father is a doctor. I have one sister. Her name is Ayşe. She is a student. We live in Istanbul. Our house is big and nice. We have a cat. Its name is Minnoş. I love my family very much.'
  },
  {
    id: 'a1-2',
    level: 'A1',
    title: 'My Daily Routine',
    content: "I wake up at seven o'clock every morning. I eat breakfast at eight. I go to school at nine. I have lunch at school. I come home at four. I do my homework in the evening. I watch TV after dinner. I go to bed at ten."
  },
  {
    id: 'a2-1',
    level: 'A2',
    title: 'A Trip to the Market',
    content: 'Yesterday I went to the market with my mother. We bought fresh vegetables and fruits. The tomatoes were red and juicy. The apples were sweet and crunchy. We also bought some bread from the bakery. The baker was very friendly. He gave us a warm smile. After shopping, we had tea at a small café near the market. It was a pleasant morning.'
  },
  {
    id: 'a2-2',
    level: 'A2',
    title: 'My Favorite Hobby',
    content: 'I enjoy reading books in my free time. I started reading when I was ten years old. My favorite books are mystery novels. They keep me excited and curious. I usually read before going to sleep. Reading helps me relax and learn new words. Last month, I read three books. My friends and I sometimes exchange books and discuss them together.'
  },
  {
    id: 'b1-1',
    level: 'B1',
    title: 'The Importance of Exercise',
    content: 'Regular exercise is essential for maintaining good health. Many people today lead sedentary lifestyles, spending hours sitting at desks or watching television. This lack of physical activity can lead to various health problems, including obesity and heart disease. Doctors recommend at least thirty minutes of moderate exercise daily. Activities such as walking, swimming, or cycling can significantly improve cardiovascular health. Additionally, exercise releases endorphins, which reduce stress and improve mood. Finding a physical activity you enjoy makes it easier to maintain a consistent routine.'
  },
  {
    id: 'b1-2',
    level: 'B1',
    title: 'Learning a New Language',
    content: 'Learning a foreign language opens many doors in life. It allows you to communicate with people from different cultures and understand their perspectives. Many employers value employees who speak multiple languages. The best way to learn is through immersion, surrounding yourself with the language daily. Watching movies, listening to music, and reading books in the target language accelerates learning. Making mistakes is a natural part of the process. Consistent practice and patience are key to becoming fluent.'
  },
  {
    id: 'b2-1',
    level: 'B2',
    title: 'The Impact of Technology on Education',
    content: 'Technology has transformed education in remarkable ways over the past two decades. Traditional classrooms, where teachers lectured and students passively took notes, are gradually being replaced by interactive learning environments. Online platforms now offer courses from prestigious universities to anyone with internet access. This democratization of knowledge has made education more accessible than ever before. However, this shift also presents challenges. Students must develop digital literacy skills to navigate vast amounts of information critically. Furthermore, the lack of face-to-face interaction in online learning can lead to feelings of isolation. Educators must find ways to balance technological tools with human connection to create effective learning experiences.'
  },
  {
    id: 'b2-2',
    level: 'B2',
    title: 'Sustainable Living',
    content: 'As environmental concerns grow, more people are adopting sustainable lifestyles. This movement goes beyond simple recycling; it encompasses every aspect of daily life. From choosing reusable products to reducing meat consumption, individuals are making conscious decisions to minimize their ecological footprint. Urban gardening has gained popularity, allowing city dwellers to grow their own vegetables. Public transportation and cycling are replacing car journeys in many metropolitan areas. While individual actions matter, systemic change is necessary. Governments and corporations must also commit to sustainable practices. The transition to a greener society requires collective effort and long-term thinking.'
  },
  {
    id: 'c1-1',
    level: 'C1',
    title: 'The Psychology of Decision Making',
    content: 'Human decision-making is far more complex than traditional economic models suggest. Rather than acting as rational agents who always maximize utility, people are influenced by cognitive biases, emotions, and social contexts. The anchoring effect, for instance, causes individuals to rely too heavily on the first piece of information they receive. Loss aversion makes people prefer avoiding losses to acquiring equivalent gains. Understanding these psychological mechanisms is crucial for policymakers and business leaders who wish to influence behavior ethically. Nudge theory proposes subtle interventions that guide people toward better choices without restricting their freedom. However, the ethical implications of such manipulation remain debated among scholars and practitioners alike.'
  },
  {
    id: 'c1-2',
    level: 'C1',
    title: 'Globalization and Cultural Identity',
    content: 'Globalization has created unprecedented connections between societies, yet it has also sparked concerns about cultural homogenization. As multinational corporations expand and digital platforms transcend borders, local traditions face erosion. Young people worldwide consume similar media, wear comparable fashion, and aspire to common lifestyles. This phenomenon has led some to argue that globalization amounts to cultural imperialism, with Western values dominating at the expense of diversity. However, others contend that cultures have always evolved through exchange and adaptation. Hybrid identities emerge when global and local influences merge, creating new forms of expression. The challenge for contemporary societies lies in embracing openness while preserving meaningful heritage.'
  },
  {
    id: 'c2-1',
    level: 'C2',
    title: 'The Paradox of Choice in Modern Society',
    content: 'Contemporary consumers face an overwhelming abundance of options, from streaming services to career paths. While conventional wisdom suggests that more choice leads to greater satisfaction, psychological research reveals a more nuanced picture. The paradox of choice suggests that excessive alternatives can produce decision paralysis and diminished happiness. When confronted with numerous possibilities, individuals experience heightened expectations and fear of missing out on superior alternatives. This phenomenon extends beyond consumer goods to life decisions such as selecting a partner or choosing a profession. The burden of possibility, as existential philosophers might term it, creates anxiety about whether one has made the optimal choice. Strategies to mitigate this include satisficing—accepting good enough options rather than pursuing perfection—and constraining deliberation time to prevent overthinking.'
  },
  {
    id: 'c2-2',
    level: 'C2',
    title: 'Artificial Intelligence and the Future of Human Labor',
    content: 'The rapid advancement of artificial intelligence has precipitated profound questions about the nature and future of human work. Unlike previous technological revolutions that primarily automated manual labor, contemporary AI systems demonstrate capabilities in cognitive domains once considered exclusively human. Machine learning algorithms now perform medical diagnoses, legal research, and creative tasks with increasing competence. This development challenges the traditional relationship between employment and economic security. Universal basic income has emerged as one proposed solution, though critics question its feasibility and psychological consequences. More fundamentally, these changes force society to reconsider what constitutes meaningful human contribution. If machines can outperform humans in productivity, what remains of our purpose? Philosophers and economists alike grapple with whether we should compete with AI or cultivate distinctly human qualities—empathy, wisdom, ethical judgment—that resist algorithmic replication.'
  }
];
