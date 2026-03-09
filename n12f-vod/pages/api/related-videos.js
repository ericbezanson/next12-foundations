// [Migration Challenge 6 - Update API routes in pages/api to app/api or edge/server actions]
// API Route for related videos
export default function handler(req, res) {
  // This should match the home page data
  const videos = [
    {
      id: 1,
      title: 'National Treasure',
      fact: 'Nicolas Cage once bought a castle in Germany, showing his love for unique real estate. He has owned several eccentric properties, including haunted mansions and private islands. Cage is known for his extravagant spending habits, which have become legendary in Hollywood. Despite financial troubles, he continues to pursue bold investments. His passion for architecture is matched only by his passion for acting.',
    },
    {
      id: 2,
      title: 'Leaving Las Vegas',
      fact: 'Cage won an Academy Award for Best Actor for his role in "Leaving Las Vegas". He is celebrated for his intense and unpredictable performances. Directors often praise his commitment to every role, no matter how unusual. Cage has starred in over 100 films, spanning nearly every genre. His versatility makes him one of the most prolific actors of his generation.',
    },
    {
      id: 3,
      title: 'Kick-Ass',
      fact: 'Nicolas Cage is a huge comic book fan and once owned a rare copy of Action Comics #1. He even named his son Kal-El after Superman’s birth name. Cage was originally cast as Superman in a film that was never made. His love for superheroes influences many of his career choices. He has voiced characters in animated superhero movies as well.',
    },
    {
      id: 4,
      title: 'Adaptation',
      fact: 'Cage changed his last name from Coppola to Cage to avoid nepotism. He is the nephew of famed director Francis Ford Coppola. The name "Cage" was inspired by Marvel’s Luke Cage. This decision helped him carve out his own identity in Hollywood. Cage’s career is a testament to his determination and individuality.',
    },
    {
      id: 5,
      title: 'Vampire’s Kiss',
      fact: 'He is known for his method acting and once pulled out his own teeth for a role. Cage has eaten a live cockroach on camera and gone to extreme lengths for authenticity. His dedication to his craft is both admired and sometimes questioned. These choices have made his performances unforgettable. Cage’s approach to acting is truly one-of-a-kind.',
    },
    {
      id: 6,
      title: 'Ghost Rider',
      fact: 'Nicolas Cage has a deep interest in mythology and the occult. He has collected ancient artifacts and rare books. Cage believes in the mystical power of certain objects and symbols. This fascination often influences his choice of film roles. His personal life is as intriguing as the characters he portrays.',
    },
    {
      id: 7,
      title: 'Con Air',
      fact: 'Cage has performed his own stunts in many action movies. He is known for his fearless attitude on set. Directors appreciate his willingness to take risks for the sake of realism. Cage’s physicality adds intensity to his action scenes. His commitment to authenticity is evident in every performance.',
    },
    {
      id: 8,
      title: 'Wild at Heart',
      fact: 'He is a musician and has released several songs. Cage’s love for music is reflected in his eclectic taste. He has played guitar in various bands and enjoys experimenting with different genres. Music is a creative outlet for him outside of acting. Cage’s artistic talents extend far beyond the screen.',
    },
    {
      id: 9,
      title: 'Mandy',
      fact: 'Nicolas Cage is fluent in several languages, including German and Italian. He enjoys traveling and immersing himself in different cultures. Cage often incorporates his linguistic skills into his film roles. His global perspective enriches his performances. Cage’s love for language is matched by his love for storytelling.',
    },
  ];
  const { id } = req.query;
  const videoId = parseInt(id, 10) || 1;
  const relatedVideos = videos.filter(v => v.id !== videoId);
  res.status(200).json({ relatedVideos });
}
