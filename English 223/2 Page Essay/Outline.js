const { Story } = require("../../lib/Writer")


const outline = {};
outline["Beginning"] = () => 
`
\tThere is something particular about the way that the summer air brings about the scent of the leaves. The rainforest has a distinct smell that is unmistakable, and 
no matter how far away I am from home, the smell of dew and Earth will always bring me back to simpler times. The times when there was joy in sparsity, and happiness was
pure and undiluted. I've never been fond of city life, and even after the many years I've commuted from work to home here in the States, I've only grown wearier of the 
bustling sounds of the busy cityscape. I miss the choir of insects that indicate the world is asleep and the animals have retired. I miss how it cued in Lolo's snore and Lola's hums as she
knitted and prayed late into the night. I miss the humble paper planes I built in hopes that one day I can board them and leave the small town I grew up in. Now, I find myself wishing to fly back
 not to a place, but to a time I can never arrive at and to a location that never existed. I wish I can go home, but home was always infinitely far away, across the great pacific ocean, 
 forever unreachable. I wish I can go home to you, ma. But you departed so long ago, and I only have your letters to visit.
`;

outline["Early childhood"] = () =>
`
\tSpeaking of your letters, I revisited one recently. Attached to it was a photograph of you and Lolo back home in Bicol. 
You and he were standing by the lawn in front of our humble home, a little wooden house built by our ancestors;  
I was talking to Marie the other day, and she loved how suave Lolo looked in the golden days with his
pencil mustache and carefully crafted pompadour. I jokingly hid the photograph from her, because
I was afraid that Lolo might jump out of the picture and take Marie away. You were 
my age in the picture, and you just graduated from high school. Lolo looked so happy that day. His silly grin almost swallowed his mustache whole. His cheeks looked like they were about to pop.
 And Ma, you looked smart as hell. The sun may have been in your eyes, and, well, you may have had a stoic look. Not even the sun can outshine you. You were the brightest
 thing that day and Lolo knew it.
`;

outline["Lolo"] = () =>
`
\tI remember when Lolo and I fought under the sun. We practiced the art of Kali with the sticks we picked up from the ground, and we chased each other around the house until dusk.
Lolo had the energy of an ox, and, like one, he showed me no mercy. But he taught me how to fight, not out of malice, but out of love and respect for each other and our culture; the warrior's creed. Lola never liked the sight of us fighting though.
Instead, she showed her love through the amazing food she cooked for us after our bouts; she had the gift of taking the humble ingredients that grew by our house and turning them into food that'd put restaurants to shame.
I still think her secret ingredient was love. You can tell when she seasoned our food with it when you can hear hums and hymns from across the room. 
`;
outline["Airplane"] = () =>
`
\tI also found a picture of me holding my beloved paper planes. I still remember the very day that Lolo showed me how to build one for the first time.
I always admired how he could take the mundane and make it magical: how he took a piece of paper from his job and turned it into my passion. I remember how he shushed and told me
that he may or may not have taken the paper back home from the naval base, and what I am about to see is confidential. With just four folds, two to shape the paper into a triangle, and one to give it wings, he
gifted the paper with the ability to fly and me with the ability to dream beyond the ground I stood on. That day my mind flew with his plane, and it never came back down. That day our favorite pastime was born.
`;
outline["Lolo's Death"] = () =>
`
\tThere's one picture I still have trouble visiting, and it was a picture of Lolo on his deathbed. Even when he was nearing his death, he looked dashingly alive. In the picture, his wide, confident grin held up our hopes, and we all thought that he wouldn't pass away anytime soon.
But when I look a little closer, his eyes were slightly sunken and his eyebrows furrowed his forehead. I think he was holding up his grin with all his might, and he was doing all that he can to stay alive with his hand grasping Lola's.
He was the embodiment of Malakas, he is my conception of strength. But even the strongest of warriors must face their final battle, and at least Lolo's was peaceful, surrounded by Lola and me. I can see Lola still coming to terms with everything that was happening.
She didn't know what to make of cancer, I don't think any loved one would. Her internal ruminations had her distracted, and, in the picture, you can see her looking at the floor wondering what her life would be without Lolo. What hurts me the most about the picture
was that her face barely held up a smile, and now all I can think of is the pain Lola has yet to endure without Malakas by her side.
`;
outline["Paper Planes"] = () =>
`
\tI remembers those years without Lolo. They flew by fast because every day was the same. Lola and I grieved for years, and the house that echoed with Lolo's and Lola's laugh became silent and somber. Lola filled the void with 
telenovelas and the radio. I was filled with countless days of folding paper and writing poems. I had so many more words to share with Lolo; I've attempted so many times to talk to him beyond the grave, but only silence was his answer. And the only way
I can feel his presence again was to fly my paper airplanes until dawn. I'd write letters to him, fold them into planes, and throw them around the house; it was my odd way of grieving, my odd way of both coming to terms with the fact that he'd never come back again and that he'll always be here.
Whenever I finished playing with them, I left them in the yard. Some of them faded, dissolved in the rain, but some of them, I think, remain buried to this day. I miss that house, ma. I remember when we had to sell it because Lola became to sick to work, and we had to move in with Tita Benji.
Maybe one day I can go back and pick those letters up to read it to him one last time.
`;

const writing = new Story(outline);
writing.word_count()
writing.print();
