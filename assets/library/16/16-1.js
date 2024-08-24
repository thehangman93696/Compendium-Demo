loadPage = function() {
    prepareStory();
    
const section1 = newSection(1);


const row1a = storyRow('1a', ' ', 
`
${storyVideo('start', isanimate= true, iscontrols= false, isloop= true, isautoplay= true, ismute=true)}

${appendLinkRow('Scene 1 &mdash; Heel Turn 2', '1b', false, 'updateCountdown()')}

`
)


section1.appendChild(row1a);

const row1b = storyRow('1b', ' ', 
    `
    ${storyVideo('K/countdown5', false, false, false, true)}
    <p>Act I (Wait for countdown)</p>
    `
    )
    
    const section2 = newSection(2);
    
    
    const row2a = storyRow('2a', ' ', 
    `
    ${storyAudio('audio/Night-on-the-Docks')}
    
    <h2 class="Boyhood-Header centralized">Friday, 25 March 2011 <span style="font-size: 2rem;">(3 days after the end)</span></h2>
    `
    )
    

    section2.appendChild(row2a);

    // const section = newSection(, '');
    
    const row2b = storyRow('2b', 'EXT.<br>SAINT SERAPHINA CATHEDRAL&rsquo;S GRAVEYARD<br>MORNING', 
        `
        ${storyVideo('K/0', true, false, true, true)}
        <p>The wind tugged at my hair, its chill biting into my skin.</p>
    <p>My right hand, so cold, felt like it wasn&rsquo;t even mine.</p>
    <p>I wanted to drop it to the ground but I couldn&rsquo;t let go.</p>
    ${storyImage('K/1')}
    <p>I fumbled for my phone, the numbers blurring, my fingers shaking as I tried to call her again.</p>
    ${storyImage('K/2')}
    <p>Still no answer.</p>
    ${storyRightImage('K/2_1')}
    <p>I was starting to think she gave me the wrong number on purpose. I let it drop and buried my hand back into my pocket. The temperature wasn&rsquo;t that low but I&rsquo;d been cursed with this persistent feeling of cold since that night.</p>
    <p><span class="Cherie">&ldquo;Ugh, you&rsquo;re till wearing that?&rdquo;</span> Her voice cut through the wind like a blade. <span class="Cherie">&ldquo;You look hideous in black.&rdquo;</span></p>
    <p>I looked up, and there she was. Bruised but still stunning, her hair wild in the wind, she had come again for the third morning in a row, bringing those colorful flowers for the graves.</p>
    <p>A red rose for Jade, a chrysanthemum for Alyssa, a poppy for Kitara, a sunflower for Goldie, and a lily for Ethyl.</p>
    <p>I brought nothing but the weight of steel in my hand. She stepped closer, took my hand, and kissed my cheek. It was the same way I had kissed her the day we met. This time, it felt like goodbye.</p>
    <p><span class="Cherie">&ldquo;I&rsquo;m leaving,&rdquo;</span> she said, like it was the simplest thing in the world.</p>
    <p><span class="Kelsi">&ldquo;I know,&rdquo;</span> I replied. She tried to take it from my hand but my grip tightened on the gun.</p>
    <p><span class="Cherie">&ldquo;It&rsquo;s time to let go, Kelsi.&rdquo;</span></p>
    <p>But I couldn&rsquo;t. Not yet. <span class="Kelsi">&ldquo;Not before I kill them all.&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;You can&rsquo;t do it alone.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Then join me,&rdquo;</span> I whispered, desperation clawing at my voice. <span class="Kelsi">&ldquo;We&rsquo;ll end them together.&rdquo;</span></p>
    <p>I had no right to ask her that after I kicked her out. But she was the only good fighter I knew, other than Tiffany. I&rsquo;d learned to appreciate Cherie&rsquo;s powers, she was the only one to survive the hangman after all, and I was willing to beg for her help if had to.</p>
    ${storyRightImage('K/3')}
    <p><span class="Kelsi">&ldquo;Ma ch&eacute;rie, my darling...&rdquo;</span>
    <p>She shook her head, a sad smile playing on her lips. <span class="Cherie">&ldquo;I don&rsquo;t wanna die, Kelsi. There are too many joys in this life I don&rsquo;t want to miss.&rdquo;</span></p>
    <p>Her eyes sparked with a memory I couldn&rsquo;t share. Someone she loved. <span class="Cherie">&ldquo;I don&rsquo;t want you to die either,&rdquo;</span> she continued.</p>
    <p><span class="Kelsi">&ldquo;So, what am I supposed to do? Forget the ones who died? Forgive the ones who live?&rdquo;</span> I&nbsp;exploded in her face.</p>
    <p>She didn&rsquo;t answer, and I could see in her fading eyes her retreating into that safe place she always kept for herself.</p>
    <p><span class="Kelsi">&ldquo;Cherie, I... I woke up this morning and I asked myself: Who am I? I was once a Dino, I used to be a Heroine, now I&rsquo;m nothing. I saw the gun and I saw the image of an angry avenger in the mirror. That&rsquo;s something. Blue is gone. Hmm, even Kelsi is gone. This gun is still here, just like the mafia are,&rdquo;</span> I mumbled, mostly to myself.</p>
    <p><span class="Kelsi">&ldquo;What are you going to do now, Cherie? Who are you from now on?&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;I&rsquo;m an outsider now,&rdquo;</span> she said, her voice light, almost carefree. She twirled, clapping her hands like it was all a game. I chuckled despite myself&mdash;her spirit was contagious, maddeningly so.</p>
    <p><span class="Kelsi">&ldquo;Outsider, huh? Is that when you don&rsquo;t care about justice and injustice? Not a scum, nor a heroine? You&rsquo;re just gonna watch this war from your balcony? Don&rsquo;t you care about the kids anymore? Those soon-to-be orphans?&rdquo;</span></p>
    <p>She didn&rsquo;t flinch <span class="Cherie">&ldquo;Not if it means I don&rsquo;t get to have my own.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Me neither. I don&rsquo;t care about the oppressed anymore. I only want vengeance.&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;There&rsquo;s no point in vengeance. You would only result in more people losing their lives, look how many have died already because of you.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;I would love to see the day where I regret killing them all.&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;You can&rsquo;t bring them back, Kelsi,&rdquo;</span> she said, her voice soft, almost pitying. <span class="Cherie">&ldquo;They&rsquo;re all gone.&rdquo;</span></p>
    <p>But I wasn&rsquo;t ready to believe that. Not yet.</p>
    <p>I remembered what happened early this morning.</p>
    ${appendLinkRow('Act II (interlude)', '2c', true)}
        `
        )
    
    section2.appendChild(row2b);
    
    
    
    
    const row2c = storyRow('2c', 'INT. KITCHEN<br>EARLY MORNING', 
    `
    ${storyAudio('audio/Serpentine-Trek', )}
    ${storyImage('K/5', 'I feel naked when I think of him...')}
    ${storyImage('K/4')}
    <p><span class="Michael">&mdash;Are you still grieving, Kelsi? Would you like me to unleash you again?</span></p>
    <p>His voice is cold and hard as steel, his words dripping with merciless intentions. My body hair stands on end.</p>
    <p><span class="Michael">&mdash;I will ravage your tiny heart with my monstrous cock and fuck all your sorrows away.</span></p>
    <p>A surge of dread courses through me as he kisses the nape of my neck, his arms snaking around my trembling ribs. His whispers are like venom in my veins, sending paralyzing shivers through my brain. He presses me against the kitchen counter, his chest crushing me from behind. I try to lean away but his grip is unyielding.</p>
    <p>He yanks up my shirt to my neck, aggressively, violently, without my consent.</p>
    <p>My frozen body can only tremble as he assaults my spine with wet, cold kisses that feel like stabs from that weird gun with the black diamond inside. My mind is blank and dark, trapped in a state of terror. What is happening to me?</p>
    <p>He kisses his way down to my tailbone, growling hungrily. His lips are abusing my back, his hands are violating me, bending me so he can get more access to my spine.</p>
    <p>He moves his hand into my jeans and pulls them down. He knows he&rsquo;s violating me but he has no remorse. His lips and tongue caress my sacrum. I&rsquo;m too afraid to fight back.</p>
    <p>Just as he bites me just above my ass, I freak out.</p>
    <p>Something snaps inside me and I push him away with all my strength. Pulling down my shirt and up my pants, I glance at those two black holes in the middle of his eyes, full of anger and bloodlust.</p>
    <p>I walk out of the kitchen as fast as I can. Luckily, he doesn&rsquo;t follow. Each step takes me further from that evil aura of his, and I feel better.</p>
    <p>Yet in spite of that, fire burns in my loins and every footstep feels like a battle cry. My blood is boiling and my breath is shallow. I can&rsquo;t get the snake&rsquo;s hisses out of my mind. <span class="Michael">&ldquo;Fuck you, Kelsi. And fuck your damn heart.&rdquo;</span></p>
    <p><span class="Kenzie">KENZIE</span><br />Kelsi, can I ask you for a favor?</p>
    <p>It&rsquo;s springtime. There&rsquo;s a ${appendLinkRowInline('breeze', '2d', true)}.</p>
    `
    )
    
    const row2d = storyRow('2d', 'INT. MAIN HALL<br>EARLY MORNING', 
        `
        ${storyAudio('audio/Comfortable-Mystery')}
    ${storyImage('K/6', 'A favor?')}
    <p>Spring air seeped through the open window in my room. Kenzie stood in the doorway, a gust of morning breeze nudging her forward.</p>
    <p><span class="Kelsi">&ldquo;What do you want?&rdquo;</span> I asked, my voice cold and indifferent.</p>
    <p>She stepped closer, her voice trembling with something between desperation and shame. <span class="Kenzie">&ldquo;Can I borrow some money?&rdquo;</span></p>
    <p>My eyes narrowed, as if trying to see through the smoke of an invisible cigarette.</p>
    <p><span class="Kelsi">&ldquo;No. You never give back what you take.&rdquo;</span></p>
    <p>Her breath hitched, and the next words came out small, like a prayer.</p>
    <p><span class="Kenzie">&ldquo;Please, big sis, please.&rdquo;</span></p>
    <p>I felt the little brat&rsquo;s hug before it landed&mdash;a warm, needy embrace that made me stiffen. Kenzie stepped back, her hands clasped together like she&rsquo;s praying, her lips pushed out, eyes soft with a kind of practiced innocence.</p>
    <p>But I&rsquo;d been down this road too many times. I&rsquo;d seen the end of this reel.</p>
    <p><span class="Kelsi">&ldquo;I&rsquo;m not giving you any money, Kenzie. Go steal from him like you always do.&rdquo;</span></p>
    <p>Her face fell, shadows deepening in the lines of her cheeks.</p>
    <p><span class="Kenzie">&ldquo;He&rsquo;s not talking to me. He&rsquo;s... avoiding me like the plague since he changed. And I don&rsquo;t know where he keeps his money anymore.&rdquo;</span></p>
    <p>I watched my sister wilt, embarrassment and sadness pooling in her eyes. I almost felt sorry for her. Almost.</p>
    <p>I looked away, my voice softening with pity.</p>
    <p><span class="Kelsi">&ldquo;Sorry, baby girl. I don&rsquo;t have any money.&rdquo;</span></p>
    <p>Her voice hardened suddenly, sharply cutting through my haze.</p>
    <p><span class="Kenzie">&ldquo;The heroine business isn&rsquo;t going well, huh?&rdquo;</span></p>
    <p>My hand snapped up, covering Kenzie&rsquo;s mouth before she could say another word.</p>
    <p><span class="Kelsi">&ldquo;Shh-shhhh. What the fuck? Are you crazy?&rdquo;</span></p>
    <p>She opened her palm in front of her and I took my wallet out.</p>
    <p>I slapped four fifty-dollar bills into Kenzie&rsquo;s open palm. She looked at them unimpressed.</p>
    <p><span class="Kelsi">&ldquo;That&rsquo;s all I got.&rdquo;</span></p>
    <p>Kenzie fanned the bills out, then looked up at me with a familiar, demanding look. I wanted to smack her in the face so fucking bad. I digged out two more hundred-dollar bills, holding them just out of reach. The moment she tried to grip them, I pulled the money back. She clearly didn&rsquo;t like that. I dropped to one knee, leveling my gaze with Kenzie&rsquo;s.</p>
    <p><span class="Kelsi">&ldquo;I need you to answer one question first.&rdquo;</span></p>
    <p>Kenzie&rsquo;s eyes flickered with interest.</p>
    <p><span class="Kelsi">&ldquo;Do you know anything about mind control?&rdquo;</span></p>
    <p>Confusion deepened in her, a frown pulling at her brow.</p>
    <p><span class="Kenzie">&ldquo;Mind control of the masses? Thought control?&rdquo;</span></p>
    <p>I shook my head slowly, my voice barely above a whisper.</p>
    <p><span class="Kelsi">&ldquo;No... I&rsquo;m talking about wiping someone&rsquo;s mind clean and making them a slave.&rdquo;</span></p>
    <p>Kenzie recoiled, unease creeping into her expression.</p>
    <p><span class="Kenzie">&ldquo;There&rsquo;s no such thing.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Kenzie, I&rsquo;m not trying to scare you. Just humor me for a second. If a scientist deleted someone&rsquo;s mind, could they ever get it back?&rdquo;</span></p>
    <p><span class="Kenzie">&ldquo;I don&rsquo;t know. Uhh, I&rsquo;ll ask Mandy for you, she loves sci-fi stuff.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;Kenzie, I really need you to answer this for me. You&rsquo;re the smartest person I know and I don&rsquo;t know what to do without you. Please think about it. What if some scientist had technology so advanced they could steal someone&rsquo;s memories and thoughts?&rdquo;</span></p>
    <p>I leaned in closer, the bills crinkling in my hand.</p>
    <p><span class="Kelsi">&ldquo;Can you restore a lost mind?&rdquo;</span></p>
    <p>Kenzie glanced at the money as I fanned my face with it, her thoughts visibly racing.</p>
    <p><span class="Kenzie">KENZIE</span><br />Are you serious right now?</p>
    <p><span class="Kelsi">KELSI</span><br />I&rsquo;m dead serious.</p>
    <p><span class="Kenzie">KENZIE</span> (sighs)<br />I don&rsquo;t know what you&rsquo;re talking about, Kelsi. Maybe... if they were smart enough to take someone&rsquo;s mind, they might be smart enough to keep a backup.</p>
    <p>I felt a wave of relief wash over me.</p>
    <p><span class="Kelsi">KELSI</span> (lips curling into a cold, grateful smile)<br />That&rsquo;s all I needed to hear. Thank you, baby girl.</p>
    <p>Kenzie chuckled as I pressed a kiss to her cheek. I rised, snatching the fifty-dollar bills back from her tiny hand.</p>
    <p><span class="Kenzie">KENZIE</span> (face flushing with anger, her eyes blazing)<br />You bitch!</p>
    ${appendLinkRow('Mirror', '2e')}
        `
        )
    
    const row2e = storyRow('2e', 'INT. MY ROOM<br>EARLY MORNING', 
        `
    ${storyImage('K/kelsi_room')}
    <p>I pushed Kenzie over and walked into my room, closing the door behind me. I opened the drawer to my nightstand, revealing the cold, metallic gun and the sleek white glass one inside. My fingers hovered over them. Just like every morning since the incident, I pondered on which gun to pick up. I counted my bullets&mdash;only one left.</p>
    <p>I took my clothes off and wore my new suit. The mirror reflected my image back, but all I could see was a stranger.</p>
    ${storyImage('K/7')}
    <p>My breath fell out deeply as I ran my fingers through my hair. I&rsquo;d tried so many times to tell my brother ny secret, but the words never came out right. I wanted to let him in, but something always held me back. I&rsquo;d kissed so many cheeks, held so many hands, but with him... it&rsquo;s different.</p>
    <p>I stared at my reflection, my heart pounding.</p>
    <p><span class="Kelsi">&ldquo;Who am I?&rdquo;</span> I whispered to the woman in the mirror.</p>
    <p>The answer echoed back in my mind.</p>
    <p><span class="Kelsi">&ldquo;I&rsquo;m anything but your bitch.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;I&rsquo;m Kelsi. And I&rsquo;m better than you.&rdquo;</span></p>
    ${appendLinkRow('Act III', '2f', true)}
        `
        )
    
    const row2f = storyRow('2f', 'EXT. GRAVEYARD<br>MORNING', 
        `
        ${storyAudio('audio/Night-on-the-Docks')}
    <p>The morning fog clung to the gravestones like a shroud, making the place feel even colder than it already was. I stood there, hands deep in my coat pockets, staring at the names etched in stone. Cherie was beside me, her face set in that easy, carefree expression she always wore.</p>
    ${storyRightImage('K/3')}
    <p><span class="Kelsi">&ldquo;Goodbye, outsider,&rdquo;</span> I said, my voice flat and devoid of emotions.</p>
    <p>She smirked, that same playful glint in her eyes. <span class="Cherie">&ldquo;I&rsquo;m still gonna be in town. Call me whenever you need me. Hey, I&rsquo;ll make you a new costume. Do you want it to be red this time?&rdquo;</span></p>
    <p>Red.</p>
    <p>It took me back, back to the days when we were just kids in costumes, running around thinking we were invincible.</p>
    ${storyImage('K/8')}
    <p>Cherie made all our costumes, with her own hands. I remember when she made the first two, Jade and I liked them so much, especially the red one. We were only Dinos back then and both of us wanted to be Red. I remembered how Jade and I had fought over the red costume and our match was drawn as usual.</p>
    <p>In the end, we let fate decide. Rock-paper-scissors. I ended up the Blue Dino, and Jade got to be Red. Funny how something so simple felt like the most important thing in the world back then.</p>
    ${storyImage('K/9')}
    <p>Cherie&nbsp;dressed herself in a costume too and started tagging along on our excursions, always late, always acting like she was some kind of superhero. And always with that damn smile. So happy to just be there. Jade didn&rsquo;t like her at first, didn&rsquo;t like having to be extra careful for Cherie&rsquo;s sake, always looking out for her and protecting her. She hated that never fading smile no matter how dangerous the situation was.</p>
    ${storyImage('K/10')}
    <p>We tried to ditch her more than once. Jade, especially, wasn&rsquo;t shy about letting Cherie know she wasn&rsquo;t welcome, and was quite cruel to her. But Darling kept coming back, kept trying to be part of our little gang.</p>
    <p>Cherie wasn&rsquo;t the superwoman she pretended to be, but she&rsquo;s super selfish. Cherie does whatever Cherie wants, no matter what or who is involved. She sees what she wants to see and hears what she wants to hear. You couldn&rsquo;t tell her no; you just had to go along with it.</p>
    <p>I&rsquo;ll admit it, though&mdash;I was always glad to see her. She brought life to our little crew, even if her antics annoyed the hell out of Jade. Life of the party I used to call her. The way she Nyah&rsquo;ed and Ooh&rsquo;ed her way through waves of villains and mafia henchmen cracked me up every time. Jade, on the other hand, just rolled her eyes.</p>
    ${storyLeftImage('K/11_1')}
    <p>Eventually, Cherie proved herself, and we let her into the Dinos for real, and immediately she decided to change the name of the group. How dare she? Heroines? Who does she think she is?</p>
    <p>But, as always, we went along with it. New girls joined later, handpicked by Jade and me. We trained them, taught them everything we knew. Cherie learned on the fly, the hard way. But she still found time to make all the costumes. Hell, without those outfits, we wouldn&rsquo;t have convinced a single one of those girls to join us. The costumes made them feel like they could take on the world. Cherie designed all our costumes, sewed them all, even named a handful of them. She did all that with so much care and love, I never heard a heroine complain about a costume&mdash;they wouldn&rsquo;t dare anyway. I&rsquo;d have knocked some sense into a heroine who did less than rain Cherie with compliments for her work.</p>
    <p>She gave each girl one, maybe two costumes. But she had plenty for herself. Before Cherie, we were just two punks fighting the system. With her, we became the mighty Heroines. Good times. It&rsquo;s all gone now.</p>
    ${storyRightImage('K/3')}
    <p>I snapped back to the present. <span class="Kelsi">&ldquo;I&rsquo;ll think about it,&rdquo;</span> I told her.</p>
    <p>She grinned, that same irritating, knowing grin. <span class="Cherie">&ldquo;I think it&rsquo;s goodbye then.&rdquo;</span></p>
    <p>She pulled me into a hug, tight enough that I could feel the steel in her muscles. <span class="Cherie">&ldquo;Good luck with your revenge against the mafia,&rdquo;</span> she whispered. Then, with a voice as cold as the morning air and as dangerous as a loaded gun, she added, <span class="Cherie">&ldquo;But if you break my toy, I WILL KILL YOU!&rdquo;</span></p>
    <p>Her grip tightened, ribs groaning under the pressure. I wheezed, <span class="Kelsi">&ldquo;Ughh- What... ugh ... toy?&rdquo;</span></p>
    <p>She let her bearhug go just as quickly, the pain leaving as fast as it had come.</p>
    <p>She laughed, light and carefree as if she hadn&rsquo;t just threatened my life. <span class="Cherie">&ldquo;Nothing. It&rsquo;s just a joke.&rdquo;</span></p>
    <p><span class="Kelsi">&ldquo;A joke?&rdquo;</span> I growled, still trying to catch my breath. <span class="Kelsi">&ldquo;You almost crushed my ribs.&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;Oh, you&rsquo;re overreacting,&rdquo;</span> she said with a dismissive wave. <span class="Cherie">&ldquo;Goodbye, K&mdash;oh, I almost forgot!&rdquo;</span> She reached into her purse and pulled out an envelope, handing it to me.</p>
    <p><span class="Cherie">&ldquo;Open it once you get h&mdash;&rdquo;</span> she started to say, but I was already tearing it open. Inside was a vial, filled with... blue diamonds?</p>
    <p><span class="Kelsi">&ldquo;What the fuck?&rdquo;</span> I muttered, staring at the shimmering shards.</p>
    <p><span class="Cherie">&ldquo;You told me you needed money, so...&rdquo;</span> she trailed off.</p>
    <p>I couldn&rsquo;t believe my eyes. <span class="Kelsi">&ldquo;Cherie, I never asked for so much money! Besides, my money problems are solved now. Wait. How did you get your hands on this?&rdquo;</span></p>
    <p>She just shrugged.</p>
    <p><span class="Kelsi">&ldquo;Cherie, these diamonds were stolen recently. They were all over the news. Where did you find them?&rdquo;</span></p>
    <p><span class="Cherie">&ldquo;I joined a new gang,&rdquo;</span> she said casually.</p>
    <p>My blood ran cold. <span class="Kelsi">&ldquo;YOU WHAT?&rdquo;</span></p>
    <p>I squared my shoulders with hers, my body tensing, ready for a fight. <span class="Kelsi">&ldquo;Cherie, who the fuck are the ${appendLinkInline('Outsiders', 'section3')}?&rdquo;</span></p>
    
        `
        )
    
    const section3 = newSection(3);
    
    
    const row3a = storyRow('3a', 'Day 1', 
    `
    <h2 data-animate class="Boyhood-Header centralized">17 August, 2006 <span style="font-size: 2rem;">(4 years and 2 seasons before the end)</span></h2>
    `)
    const row3b = storyRow('3b', 'INT. KITCHEN<br>EARLY MORNING', 
    `
    ${storyAudio('audio/Shadow-Of-A-Doubt', false)}
    <p><span class="Michael">MICHAEL</span> (sauntering into the kitchen, tipping an invisible hat)<br />Morning, m&rsquo;Lady.</p>
    ${storyRightImage('mom')}
    <p><span class="Lena">MOM</span> (soft chuckle)<br />Good Morning, honey. Today&rsquo;s a special day for you, and I&rsquo;m so happy!</p>
    <p><span class="Michael">MICHAEL</span> (with a smirk)<br />And why&rsquo;s that? It&rsquo;s just the first day of school. Big deal. You&rsquo;re always so excited about everything.</p>
    <p>Mom pulled out a party blower and gave it a playful toot.</p>
    <p><span class="Lena">MOM</span><br />Happy 18th birthday!</p>
    <p><span class="Michael">MICHAEL</span> (shrugging)<br />Oh, right. That too, I guess.</p>
    <p>Mom stepped closer, her eyes locking with his.</p>
    <p><span class="Lena">MOM</span><br />I can&rsquo;t believe how quickly you&rsquo;ve grown up. Feels like just yesterday, you were my baby.</p>
    <p>A tear glistened in the corner of her eye as her gaze lingered on Michael&rsquo;s.</p>
    <p><span class="Michael">MICHAEL</span> (rolling his eyes, teasing)<br />Geez, Mom, don&rsquo;t get all dramatic on me. It&rsquo;s not like I shot up a foot overnight. I&rsquo;m the same guy I&rsquo;ve always been. It&rsquo;s just... now I can do more stuff legally, I guess. No big deal.</p>
    <p><span class="Lena">MOM</span> (smiling, pinching his cheek)<br />Don&rsquo;t be so grumpy. Look at you, all grown up and handsome! Those girls at school won&rsquo;t be able to keep their eyes off you. I&rsquo;m so jealous!</p>
    <p>She moved in for a hug, but Michael lightly pushed her away.</p>
    <p><span class="Michael">MICHAEL</span> (half-laughing, half-serious)<br />Stop that! You&rsquo;re treating me like a kid!</p>
    <p><span class="Lena">MOM</span> (pouting playfully)<br />I just want a hug.</p>
    <p><span class="Michael">MICHAEL</span><br />No, you&rsquo;re trying to embarrass me. You can&rsquo;t do that.</p>
    <p><span class="Lena">MOM</span> (with a wicked grin)<br />Oh, I can do whatever I want!</p>
    <p>He tried to step back, but Mom reached for his shirt. He slapped her hand away, and she giggled, attempting again with her other hand.</p>
    <p><span class="Michael">MICHAEL</span> (laughing, exasperated)<br />Hey, cut it out! You can&rsquo;t do that to a grown man like me. You&rsquo;re... legally not allowed anymore.</p>
    <p><span class="Lena">MOM</span><br />Oh yeah?</p>
    <p><span class="Michael">MICHAEL</span><br />Yeah! I&rsquo;ll report you to the police.</p>
    <p>Mom burst out laughing, and as she did, Michael seized the opportunity to dash away. But she was quicker, catching him from behind, her laughter vibrating against his neck.</p>
    <p><span class="Lena">MOM</span> (whispering, teasing)<br />No, no, no. Don&rsquo;t tell the police on me. I&rsquo;m sorry.</p>
    <p>She rubbed slow, comforting circles on his chest, her touch making him squirm.</p>
    <p><span class="Michael">MICHAEL</span><br />I&rsquo;ll report you for harassing an old man like me.</p>
    <p><span class="Lena">MOM</span> (giggling)<br />Ahahaha, nooooo.</p>
    <p>She ran her fingers through his hair.</p>
    <p><span class="Lena">MOM</span> (softly, almost possessively)<br />Mmm, I love you so much, Michael.</p>
    <p><span class="Michael">MICHAEL</span> (grinning)<br />As you should!</p>
    <p>She tightened her embrace, pressing her body against his, her nose nuzzling the back of his neck before placing a feather-light kiss on his skin. The touch sent a shiver down his spine, her lips leaving a cool, damp imprint that lingered.</p>
    <p><span class="Lena">MOM</span> (breathing him in)<br />You look so good this morning, and you smell even better. I&rsquo;m afraid some girl&rsquo;s going to steal you away from me one day.</p>
    <p>She ruffled his hair, messing it up deliberately, her hands roaming over his arms, his chest, his abdomen.</p>
    <p><span class="Michael">MICHAEL</span><br />Don&rsquo;t worry, Mom. I&rsquo;m not going anywhere.</p>
    <p><span class="Lena">MOM</span> (her hands moving faster)<br />Promise?</p>
    <p><span class="Michael">MICHAEL</span><br />Of course not. I&rsquo;m not going to leave you for some sexy high school girl&mdash;Hey! Watch it, woman! You&rsquo;re messing my clothes up. (gasp) That&rsquo;s what you&rsquo;re doing! You&rsquo;re messing me up on purpose!</p>
    <p><span class="Lena">MOM</span> (grinning devilishly)<br />They&rsquo;re not gonna take you from me!</p>
    <p><span class="Michael">MICHAEL</span><br />Leave me alone, you psycho!</p>
    <p>He wrestled free from Mom&rsquo;s grip and surveyed his crumpled clothes and tousled hair as she erupted into laughter. Disappointment flickered across his face as he gazed at her.</p>
    <p><span class="Lena">MOM</span> (still laughing)<br />Okay, okay, I&rsquo;m sorry. Enough playing around. Here, I got you a gift.</p>
    <p>She handed him a small box, the size of a chocolate bar. Michael opened it immediately, revealing ten crisp $100 bills.</p>
    <p><span class="Michael">MICHAEL</span><br />A thousand dollars? Seriously?</p>
    <p><span class="Lena">MOM</span><br />Yup, that&rsquo;s your birthday gift.</p>
    <p><span class="Michael">MICHAEL</span><br />Thank you so much. That&rsquo;s the best gift ever! I&rsquo;m gonna give you a thousand kisses for that.</p>
    <p><span class="Lena">MOM</span><br />As you should. Mmmm.</p>
    <p>Mom bent slightly, leaning in with her lips puckered, waiting for a kiss.</p>
    <p><span class="Michael">MICHAEL</span><br />You&rsquo;re so lame.</p>
    ${storyImage('street')}
    <p>Without another word, he left her hanging, walking out of the room. Backpack in hand, he headed for the front door. Mom swung it open, calling after him.</p>
    <p><span class="Lena">MOM</span><br />Michael! Break those girls&rsquo; hearts for me.</p>
    <p><span class="Michael">MICHAEL</span> (without turning around)<br />Shut up, Mom!</p>
    <p>He kept walking, Mom&rsquo;s laughter echoing down the street.</p>
    
    ${appendLink('Go to school', 'section4')}
    `
    )
    
    section3.appendChild(row3a);
    section3.appendChild(row3b);
    
    
    const section4 = newSection(4);
    
    
    const row4a = storyRow('4a', 'INT. FIRST MAIN HALL<br>EARLY MORNING', 
    `
    ${storyImage('school_hall')}
    
    <p><em>I&rsquo;ll break some hearts alright,</em> the thought crossed his mind as he stepped into the school hall.</p>
    <p>First days usually got his nerves going, but not today. Today, he wasn&rsquo;t nervous&mdash;just irritated by the chaos around him. His eyes scanned the crowd, searching for a familiar face. He walked down the long main hall, and then... he saw her.</p>
    ${storyLeftImage('gina_hall')}
    <p>Gina. The hottest girl in school&mdash;and probably the universe, he thought to himself.</p>
    <p>His heart sped up, sweat beading on his brow. She was heading his way, and for once, he didn&rsquo;t want to look away. Normally, he&rsquo;d wimp out, but today, she looked hotter than ever. Mom&rsquo;s words echoed in his mind, the memory of her kiss lingering on his neck. He&rsquo;d wanted to talk to Gina for years but never had the courage. Today, he decided, will be different.</p>
    <p><em>Let&rsquo;s break a heart today.</em></p>
    <p>He swallowed hard and took a deep breath, his nerves frazzled as he stepped forward.</p>
    <p><span class="Michael">&ldquo;Hey, Gina,&rdquo;</span> he called out, trying to sound cool, but his voice betrayed him, cracking with nerves.</p>
    <p>Gina turned, her eyes sliding over him with the barest hint of recognition. <span class="Gina">&ldquo;Who are you?&rdquo;</span> she asked, her tone laced with disdain.</p>
    <p><span class="Michael">&ldquo;I&rsquo;m Michael,&rdquo;</span> he stammered, clearing his throat, <span class="Michael">&ldquo;we were in the same class last year.&rdquo;</span></p>
    <p>Her eyes narrowed slightly, sizing him up with a slow, dismissive once-over. <span class="Gina">&ldquo;I don&rsquo;t remember you. What do you want, bozo?&rdquo;</span></p>
    <p>Michael&rsquo;s heart plummeted and his confidence shattered. He opened his mouth to speak, but before he could muster a response, Rick Davidson&mdash;towering, intimidating, and every bit fit to be the school&rsquo;s alpha male&mdash;stepped in, positioning himself between Michael and Gina.</p>
    ${storyRightImage('rick_hall')}
    <p><span class="Rick">&ldquo;Speak up, man,&rdquo;</span> Rick taunted. <span class="Rick">&ldquo;She can&rsquo;t understand you. What do you want from her?&rdquo;</span></p>
    <p>Michael&rsquo;s temper flared. <span class="Michael">&ldquo;I didn&rsquo;t speak to you, Rick. Mind your own fucking business.&rdquo;</span></p>
    <p>He shoved Rick aside, harder than he intended. Gina screamed as Rick stumbled, almost crashing into her. Panic flared in Michael&rsquo;s chest&mdash;what if she got hurt? But Rick quickly regained his balance, and his face twisted into a sneer. Without warning, he grabbed Michael by the collar and slammed him against a locker, his forearm pressing hard against Michael&rsquo;s throat.</p>
    <p><span class="Rick">&ldquo;What are you doing, man? You know I&rsquo;m gonna fuck you up, right? Why the fuck are you talking to my girl?&rdquo;</span> Rick growled, his face inches from Michael&rsquo;s.</p>
    <p>Michael&rsquo;s heart stopped. <em>They&rsquo;re dating now?</em></p>
    <p>Rick&rsquo;s arm pushed tighter against his throat, making it hard to breathe, let alone speak.</p>
    <p><span class="Rick">&ldquo;What? You can&rsquo;t talk? Are you mute like your dummy little sister?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;I didn&rsquo;t want anything. I was just saying hi,&rdquo;</span> Michael choked out</p>
    <p>Rick&rsquo;s eyes narrowed further. <span class="Rick">&ldquo;Well, say hi to my fist,&rdquo;</span> he snarled, drawing back to deliver the blow.</p>
    <p>Michael squeezed his eyes shut, bracing for the inevitable punch, but it never came.</p>
    <p>The hallway was filled with murmurs, a crowd gathering to watch the unfolding drama.</p>
    <p><strong>&ldquo;Oh, shit, a big fight&rsquo;s gonna start,&rdquo;</strong> someone whispered.</p>
    <p><strong>&ldquo;Nah, it&rsquo;s just Rick bullying a nobody,&rdquo;</strong> another voice responded.</p>
    <p><strong>&ldquo;That&rsquo;s Kelsi&rsquo;s brother, right there,&rdquo;</strong> someone else chimed in.</p>
    <p><strong>&ldquo;Oh, shit. Hell&rsquo;s gonna break loose today.&rdquo;</strong></p>
    <p>Rick&rsquo;s grip loosened immediately. <span class="Rick">&ldquo;Is that true? You&rsquo;re Kelsi&rsquo;s brother?&rdquo;</span></p>
    <p>Michael didn&rsquo;t answer, just glared at Rick, venom in his eyes. Rick stepped back, releasing him, then awkwardly patted Michael&rsquo;s shoulder, trying to play off his sudden fear. He even pulled Michael&rsquo;s collar and straightened his shirt for him.</p>
    <p><span class="Rick">&ldquo;Sorry, man, didn&rsquo;t know who you were. No hard feelings, huh?&rdquo;</span> Rick extended his fist for a bump, but Michael ignored it, shoving past him. Disappointed groans rippled through the crowd as they realized there would be no fight.</p>
    <p>Michael made a beeline for his next class. He barely took two steps and an angel had stuck beside him. <span class="Milena">&ldquo;Yo,&rdquo;</span> she called out.</p>
    ${storyLeftImage('milena_hall')}
    <p><span class="Michael">&ldquo;What&rsquo;s up?&rdquo;</span> he muttered without turning, still fuming.</p>
    <p><span class="Milena">&ldquo;You should&rsquo;ve told me you were gonna pick a fight. I wouldn&rsquo;t have missed that for the world,&rdquo;</span> Milena laughed, lunging to match Michael's pace.</p>
    <p><span class="Michael">&ldquo;So, Gina and Rick are dating now?&rdquo;</span></p>
    
    `
    )
    
    section4.appendChild(row4a);
    
    
    const row4b = storyRow('4b', 'INT. SECOND MAIN HALL<br>EARLY MORNING', 
    `
    <p><span class="Milena">&ldquo;Is that why you were fighting Rick? You gotta be insane.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;But I didn&rsquo;t know that before I approached her.&rdquo;</span></p>
    <p>Milena&rsquo;s eyes widened in disbelief. <span class="Milena">&ldquo;Wait, you actually approached her?!! Woah, woah, wait.</span> (Michael stopped)<span class="Milena"> Do you want to tell me... that after all these years, you finally</span><span class="Milena">decided to man up and talk to the girl of your dreams, the girl you&rsquo;ve always drooled thinking about?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;Yup,&rdquo;</span> Michael confirmed, a self-deprecating chuckle escaping his lips. <span class="Michael">&ldquo;I walked through the door feeling like a big man and I saw her walking and I thought... well, you only live once.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;And you walked up to her, you... you collected enough courage to stop her in her tracks,</span> (chuckle) <span class="Milena">only... only when she started dating the biggest, well, second biggest jock in the school?&rdquo;</span></p>
    <p>She wanted to laugh so bad and she hardly kept the composure of her face while trying to complete her weak sentence.</p>
    <p><span class="Michael">&ldquo;Yup.&rdquo;</span></p>
    <p>Milena tried to hold back her laughter but failed miserably when Michael palmed his own face, bursting into a fit of giggles. When her fit was over, she raised her hand for a high five.</p>
    <p><span class="Milena">&ldquo;Wow, you really are the unluckiest bastard in the universe.&rdquo;</span></p>
    <p>Michael slapped her hand in a high five. <span class="Michael">&ldquo;You&rsquo;re goddamn right!&rdquo;</span></p>
    ${storyImage('milena1')}
    <p>So this is Milena. She&rsquo;s Michael&rsquo;s best friend. She used to be his &lsquo;school best friend,&rsquo; but after Kenzie turned into a weirdo around him, Milena became his best friend, period. Inside the school walls, they&rsquo;re inseparable. Two peas in a pod. Or two ass cheeks in a panty, as Milena would say.</p>
    <p>Milena&rsquo;s the only good thing about this school. She&rsquo;s smart, she&rsquo;s funny, and she&rsquo;s really, really, really beautiful.</p>
    <p>They became friends four years ago after he stupidly ran into a pole on the school grounds and knocked himself out.</p>
    <p>Back then, he didn&rsquo;t have many friends, and he wasn&rsquo;t exactly likable. Milena took pity on him, because no one else would bother, so she decided to wake him up herself.</p>
    <p>As he came to a wake and opened his eyes to her, he freaked out and screamed, <span class="Michael">&ldquo;Ah! Don&rsquo;t take me to heaven!&rdquo;</span></p>
    <p>He remembers the look of surprise on her face. After a moment of processing what she had just heard, Milena burst out laughing, almost rolling on the ground.</p>
    <p>You see, as criminally beautiful as she is, Milena wasn&rsquo;t popular at school either. Her family had moved in town four years ago, and almost every boy who saw her tried to hit on her. No wonder she was a bit intimidated by people here. And as he&rsquo;d later find out, she wasn&rsquo;t even interested in boys.</p>
    <p>So, given that every student either hit on her or acted awkwardly around her, she avoided most students. She gained a reputation for being arrogant, as if she thought she was better than everyone else. People harassed her at first, calling her names and telling her to get off her high horse. But she didn&rsquo;t care and kept to herself, speaking to nobody. Eventually, people just learned to ignore her.</p>
    <p>But she wasn&rsquo;t fazed by Michael. Initially, she suspected it was all a ploy, thinking he&rsquo;d faked unconsciousness just to talk to her. She found the notion both hilarious and pathetic. He insisted it was her fault, claiming their brief eye contact they had before the accident distracted him. She felt no remorse whatsoever and actually found it amusing that her presence had momentarily scared him. The whole thing was very funny to her.</p>
    <p>And ever since, it became a running joke between them that he called her an angel.</p>
    <p>But that small accident wasn&rsquo;t the reason she stuck with him. Why would an angel fall from the sky and be his buddy, you might ask? Well, it&rsquo;s because she wanted to get closer to...</p>
    ${storyRightImage('ned_hall')}
    <p><span class="Ned">&ldquo;Hey, guys. I want a high five too.&rdquo;</span></p>
    <p>Ned approached them with an eager smile, a bit too wide-eyed, like a lost puppy hoping to be adopted.</p>
    <p>Milena gave Ned a high five, nudging him to turn towards Michael, so he gestured for another high five. Michael&rsquo;s expression darkened, and in one swift move, he grabbed Ned by the shirt, yanking him closer. The suddenness of it made Ned whimper, his eyes now wide with fear.</p>
    <p><span class="Michael">&ldquo;What the fuck do you want, fatso?&rdquo;</span> Michael snarled, his voice low with malicious intent.</p>
    <p>Ned&rsquo;s courage crumbled. He stuttered, his words a shaky mess. <span class="Ned">&ldquo;I j-just want to... h-hang out with you... guys?&rdquo;</span></p>
    <p>Michael wasn&rsquo;t having it. He raised his fist, holding it menacingly close to Ned&rsquo;s face, the threat of violence clear in his eyes. <span class="Michael">&ldquo;Get the fuck out of here before I break your stupid face.&rdquo;</span></p>
    <p>Ned&rsquo;s breath hitched, and he nodded frantically. As soon as Michael let go, Ned bolted, practically tripping over his own feet as he fled. Michael watched him go, a smirk curling on his lips as he muttered, <span class="Michael">&ldquo;Pathetic.&rdquo;</span></p>
    <p>Milena, who had been silent up until now, stepped closer, her brow furrowed in disapproval. <span class="Milena">&ldquo;What did you do that for? He just wanted to hang out.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;He can&rsquo;t hang out with us! He&rsquo;s a fucking loser,&rdquo;</span> Michael shot back, his anger still simmering.</p>
    <p>Milena crossed her arms, her tone firm but calm. <span class="Milena">&ldquo;We&rsquo;re losers too, Michael. It only makes sense that he hangs with us.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;No, Milena, we&rsquo;re not losers,&rdquo;</span> Michael insisted, his voice softening as he tried to justify himself. <span class="Michael">&ldquo;We&rsquo;re just... average. We&rsquo;re bang average.&rdquo;</span></p>
    <p><span class="Milena">&ldquo;Average? What does that even mean?&rdquo;</span> Milena asked, her voice tinged with disbelief. <span class="Milena">&ldquo;And anyway, if you don&rsquo;t like him, you could&rsquo;ve just told him off nicely. You didn&rsquo;t have to threaten him and scare him. That was totally unnecessary and uncalled for. Why did you do that?&rdquo;</span></p>
    <p>Michael sighed, running a hand through his hair, his earlier bravado fading. <span class="Michael">&ldquo;Ugh, I don&rsquo;t know. Maybe I was just blowing off steam after wimping out with that jerk Rick. Look, I&rsquo;m sorry.&rdquo;</span></p>
    <p>Milena&rsquo;s gaze softened, but she wasn&rsquo;t letting him off the hook. <span class="Milena">&ldquo;Go apologize to him, not me.&rdquo;</span></p>
    <p><span class="Michael">&ldquo;I&rsquo;m not gonna look for him,&rdquo;</span> Michael muttered, his voice stubborn. <span class="Michael">&ldquo;He&rsquo;ll show up again later, I&rsquo;m sure.&rdquo;</span></p>
    <p>Milena shook her head, clearly not satisfied. <span class="Milena">&ldquo;So... what did you mean by &lsquo;bang average&rsquo;?&rdquo;</span></p>
    <p>Michael&rsquo;s eyes brightened as he leaned in. He put his arm around Milena&rsquo;s shoulder and dragged her by his side.</p>
    ${storyImage('pyramid0')}
    <p><span class="Michael">&ldquo;Well, you see? Not all students are equal in this school. We&rsquo;re divided into classes of what I call... The Pyramid of Popularity.&rdquo;</span></p>
    <p>Milena groaned, burying her face in her palms, clearly unimpressed with his metaphor. <span class="Milena">&ldquo;You&rsquo;ve got to be kidding me.&rdquo;</span></p>
    ${storyImage('pyramid2')}
    <p><span class="Michael">&ldquo;The pyramid has many levels,&rdquo;</span> Michael continued, undeterred. <span class="Michael">&ldquo;Hot girls and jocks like Gina and Rick are closer to the top of the pyramid. Other students reside in lower classes depending on their social status, inside the school at least.&rdquo;</span></p>
    ${storyImage('pyramid4')}
    <p>He smirked, his eyes gleaming with disdain. <span class="Michael">&ldquo;The bottom tier is a cesspool of worthless loners like Ned.&rdquo;</span></p>
    <p>Milena rolled her eyes, her patience thinning. <span class="Milena">&ldquo;And where do we fit into your pyramid, oh wise one?&rdquo;</span></p>
    <p>Michael&rsquo;s smirk softened into a more sincere expression. <span class="Michael">&ldquo;You and I? We&rsquo;re the average joes, we&rsquo;re in the middle of the pyramid. But don&rsquo;t worry, my sweet angel,&rdquo;</span> he added, his voice dropping into a confident whisper, <span class="Michael">&ldquo;I&rsquo;m gonna climb to the top of the ladder, and I&rsquo;m gonna take you with me.&rdquo;</span></p>
    <p>Milena raised an eyebrow, clearly skeptical but amused by his determination. <span class="Milena">&ldquo;Oh yeah? And who&rsquo;s at the top of that pyramid now?&rdquo;</span></p>
    <p><span class="Michael">&ldquo;You know who,&rdquo;</span> Michael replied, his voice taking on a reverent tone.</p>
    <p>Milena glanced around, her eyes widening as she spotted her. <span class="Milena">&ldquo;Oh, oh, she&rsquo;s coming.&rdquo;</span></p>
    ${storyImage('kelsi_cropped')}
    <p>Michael followed her gaze, and there she was, striding towards them in an elegant but menacing stride, with an air of authority that made the hallway part before her like the Red Sea.</p>
    <p>She was the most popular girl in school. Every teacher&rsquo;s pet, every simp&rsquo;s queen, every bully&rsquo;s nightmare, and the angel&rsquo;s wet dream... The enforcer of our schoolyards... The undisputed ruler of the top of the pyramid.</p>
    ${appendLinkRow('End of Demo', 'demoEnd', true)}
    `
    )
    
    section4.appendChild(row4b);
    
    const demoEnd = storyRow('demoEnd', 'END OF DEMO', 
    `
    <p><strong>Thank you for exploring the demo!</strong></p>
<p>Did you enjoy yourself?&nbsp;Join us on Patreon, where the story continues. With just one click, you can unlock the rest of this chapter and many more. Plus, <strong>Chapters 2-10 of Boyhood</strong> are already written and designed&mdash;coming your way soon!</p>
<p>Not ready to commit? No worries! Join our page for free to stay updated and be the first to know about new releases.</p>
    ${storyVideo('demoEnd', true, false, true, true, true)}
    <a class="btn btn--stroke custom-story-button" href="#" onclick="endBoyhoodDemo()">
    End Demo</a>
    <a class="btn btn--primary custom-story-button" href="https://www.patreon.com/Liturgy97"  target="_blank">
    Get Full Access</a>
    `
    )
    
}


// const section = newSection();


// const row = storyRow('', '', 
// `

// `
// )

// section.appendChild(row);

   

    setChapterIndex = ()=> {
    currentChapterIndex.innerHTML= '';

    addToChapterIndex('Section 1', 'section1') 
    addToChapterIndex('Section 2', 'section2') 
    addToChapterIndex('Section 3', 'section3') 
    addToChapterIndex('Section 4', 'section4') 
    }
    

    storyLoad();

    
function updateCountdown() {
    setTimeout(() => {
        fadeTransition(document.getElementById('MainSection'), timeout=100, func =()=> {

            rows['1b'].innerHTML= `
            ${sceneryHeader(' ')}
            
            <div class="rowContent ${contentClass()} ">
            ${storyVideo('K/play', false, false, true, true)}
            
            ${appendLink('Act I', 'section2')}
        </div>
            
            `;
    

        })
        
        
    }, 16000);
}

function endBoyhoodDemo() {
    
    data.boyhood_demo_complete = true;
    
    
    currentChapter.currentSection='section1';
    updateChapterObj();
    currentStory.isRead = true;
    currentStory.isComplete = true;
    updateStoryObj();
    refreshMainPageStoryButton(currentStory.name);
    switchToPage('MainPage');
    clearLoadedScripts();
    
}