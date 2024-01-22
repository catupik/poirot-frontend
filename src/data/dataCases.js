const dataCases = [
  {
    id: 1,
    description: `My very first case, "The Mysterious Affair at Styles", marked the beginning of my long and eventful career as a detective. This intriguing case unfolded in the quiet countryside of England, in a grand old house named Styles Court. The mystery began with the distressing murder of Emily Inglethorp, a wealthy matriarch known for her charitable work. The circumstances of her death were most puzzling, involving a locked room and a complex array of potential suspects, each with their own motives and secrets.
    
      It was here that I first demonstrated my distinctive method of using the "little grey cells". The case required careful sifting through a tangle of alibis, motives, and misleading clues. In solving this mystery, I relied not just on physical evidence, but on understanding the psychology of the suspects involved. This case set the tone for my approach to crime solving, highlighting the importance of intellect over chance and the necessity of looking beyond the obvious to uncover the hidden truths.`,
      year: 1920,
      name: "The Mysterious Affair at Styles",
      image: "styles",
   
  },
  {
    id: 2,
    description: `This was one of the most memorable and elegant cases in my career. The investigation began during a luxurious cruise along the majestic Nile. I found myself aboard a cruise liner when the murder of Linnet Ridgeway, a young and very wealthy heiress, occurred. Her death was a shock to all, as she had just celebrated her wedding.

This case was particularly challenging due to the large number of passengers, each of whom had their own motives for murder. Among them were enviers, spurned lovers, offended friends, and relatives. My task was not only to find the murderer among this multitude of people but also to understand how this sophisticated crime was committed.

Through careful analysis of witness testimonies and crime circumstances, I was able to slowly but surely piece together all parts of this puzzle. Eventually, my attention to detail and logical approach allowed me to expose the murderer and the motives that led to this tragic event aboard the cruise ship.`,
    year: 1937,
    name: "Death on the Nile",
    image: "nile",
  },
  {
    id: 3,
    description: `This case brought me as much pleasure as a traditional Christmas pudding. The investigation began during the Christmas holidays, when I was invited to investigate the theft of a priceless family relic - an antique ring. The case led me to a country house, where I encountered a variety of interesting and unique characters, each seemingly with their own secrets. The events unfolded in an atmosphere of festivity and joy, but beneath this merry surface lay deceit and intrigue. Using my skills of observation and logical analysis, I carefully watched every movement and word spoken by the participants in this Christmas scene. Ultimately, I was able to unravel the mystery of the stolen ring, which was hidden where no one expected to find it. This case reminded me that even in the most joyous time of the year, mysterious stories can occur that require a detective's intervention.`,
    year: 1960,
    name: "The Mystery of the Christmas Pudding",
    image: "christmas",
  },
  {
    id: 4,
    description: `My friends, this was a challenging case. A case that made me ponder the fine line between coincidence and deliberate action. It began with a series of mysterious attempts on the life of Miss Nick Buckley, an heiress to a great fortune. She lived in the beautiful mansion of End House, and despite her youth and carefreeness, she constantly faced deadly threats that seemed to be pure coincidence. I was invited by her friend to find out if these unfortunate incidents were indeed accidental. My investigation led me through many twists and unexpected discoveries, where everyone seemed to have their own secrets and motives. Gradually, I laid out the facts like a house of cards, and with each new clue, the picture became clearer. In the end, I uncovered the truth about the series of attempts, which turned out to be much more complicated and dark than anyone could have imagined. It was one of those cases that remind us that the truth is often hidden behind apparent obviousness.`,
    year: 1932,
    name: "The Mystery of End House",
    image: "endhouse",
  },
  {
    id: 5,
    description: `One of my most famous cases, and it truly deserves special attention. In this case, I dealt with the murder of Roger Ackroyd, which occurred in a small English town. This case was special because I took it up after a short period of rest from detective work. Ackroyd was found dead in his home shortly after receiving a letter, which was supposed to reveal the name of the blackmailer of his future deceased wife. The complexity of the case was that what seemed like a simple case at first glance turned out to be extremely complicated, with many secrets and lies hidden by almost all the characters in this story. I conducted a detailed investigation, interviewing all possible witnesses and sorting out their alibis. Using my method of logical reasoning, I was able to unravel this web of deception and ultimately reveal the murderer, which was an unexpected twist for all participants in this drama.`,
    year: 1926,
    name: "The Murder of Roger Ackroyd",
    image: "ekroid",
  },
  {
    id: 6,
    description: `This case, which I remember particularly well, struck me with its uniqueness and mystery. It all began with a séance where a murder was predicted. Incredibly, the prediction soon came true. I faced the challenging task of deciphering how a message from the spirit world could foretell a real crime. The investigation led me to the seemingly cozy town of Sittaford, where I quickly realized that its peaceful residents hid many secrets. Each turn of events added new shades to the mystery, and I had to use all my skills to navigate through this labyrinth of deception and delusions. Ultimately, I revealed the secret, proving that behind the mystical facade were very earthly motives and actions.`,
    year: 1931,
    name: "The Sittaford Mystery",
    image: "sittaford",
  },
  {
    id: 7,
    description: `This case began with a mysterious murder on the 'Blue Express', where a wealthy heiress, Ruth Kettering, was murdered. She was found dead in her compartment, and her precious ruby necklace had disappeared. Among the passengers were many suspects, each with their own secrets. I undertook the investigation, exploring numerous clues and motives related to this case. Gradually unraveling the complex web of deceit and greed, I uncovered the hidden truth of this ominous crime, demonstrating that the truth often lies behind a veil of appearance.`,
    year: 1928,
    name: "The Mystery of the Blue Train",
    image: "bluetrain",
  },
  {
    id: 8,
    description: `This was one of my most intriguing investigations. It all started with a surprisingly low price for an apartment in central London, which aroused my suspicions. A young couple who rented this apartment soon encountered a series of strange events, including the disappearance of furniture and mysterious sounds. My investigation quickly showed that behind the tenants' mundane complaints lay a much more complex story, linked to international espionage and crimes. My observational skills and ability to analyze the most insignificant details were key to unraveling this mystery. In the end, thanks to my method of logical thinking and attention to details, I was able to untangle this intricate story, revealing the hidden connections and motives behind seemingly innocent events.`,
    year: 1923,
    name: "The Adventure of the Cheap Flat",
    image: "flat",
  },
  {
    id: 9,
    description: `"The Mystery of the Seven Dials" is one of the most mysterious cases in my practice. The case began unusually – with a strange story in a country house, where during a party guests discovered mysterious clock faces thrown on the floor. Each dial was linked to a certain event, foretelling incredible and dangerous consequences. I had to use all my deductive abilities to solve this mysterious enigma. The clues led me to a spy network and complex international intrigues. This case required not only insight but also special attention to details, as every little thing could be a key link in the chain of events. In the end, as usual, my little grey cells were able to shed light on this dark story, unraveling its mysteries.`,
    year: 1929,
    name: "The Seven Dials Mystery",
    image: "seven",
  },
  {
    id: 10,
    description: `"Elephants Can Remember"... This was one of my most unusual cases. The task began with a simple question about the past. The case concerned a double suicide - or perhaps murder - many years ago. I had to turn to 'elephants', metaphorical witnesses of the past, whose memories could shed light on this dark story. It turned out that the key to the solution lay in long-forgotten memories hidden in the depths of the human mind. And as always, my little grey cells were indispensable in uncovering the truth.`,
    year: 1972,
    name: "Elephants Can Remember",
    image: "elephant",
  },
  
    {
      id: 11,
      description: `One of my most iconic investigations. This case began in extraordinary circumstances: aboard the famous Orient Express, crossing the snowy expanses of Europe. One morning, the murder of a passenger - an unpleasant American named Ratchett - was discovered. The situation was complicated by the fact that the train was stuck in the snow, meaning the killer was still on board.

      Among the passengers were many unique and interesting personalities, each with their own secrets and motives. My investigation was filled with interrogations, analysis of alibis, and careful examination of every detail. In this case, I encountered astonishing complexity and sophistication of the crime that surpassed anything I had dealt with before.
  
      Using my knowledge in psychology and the ability to connect seemingly insignificant facts, I gradually unraveled layer by layer this complex puzzle. In the end, I was able to reveal the astonishing truth about this murder, which turned out to be as shocking as it was unexpected.`,
      year: 1934,
      name: "Murder on the Orient Express",
      image: "express",
    }
    
  
];

export default dataCases;
