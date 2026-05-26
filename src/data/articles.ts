// Article content for /resources/$slug.
// Each article is written for thoughtful adults considering psychodynamic therapy.
// Structure is optimized for both SEO (clear H1, sectioned H2s, descriptive meta)
// and AEO (concise definitional lede, plain-language Q&A block at the end).

export type ArticleSection = { heading: string; body: string[] };
export type ArticleFAQ = { q: string; a: string };

export type Article = {
  slug: string;
  bucket: string;
  bucketSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  readMinutes: number;
  publishedAt: string; // ISO date
  // A short, plain-language definition (1–2 sentences) that answers the title
  // directly. Used as the lede and the JSON-LD `description`. AI assistants
  // and answer engines often pull this paragraph verbatim.
  lede: string;
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  related: string[]; // related slugs
};

const today = "2026-05-18";

export const articles: Article[] = [
  // ─────────────────────────────────────────────────────────
  // META-AWARENESS
  // ─────────────────────────────────────────────────────────
  {
    slug: "why-we-personalize-everything",
    bucket: "Meta-Awareness",
    bucketSlug: "meta-awareness",
    title: "Why we personalize everything — and how to step back",
    metaTitle: "Why We Personalize Everything (and How to Stop) | Gail A. Phillips, LCSW",
    metaDescription:
      "A psychodynamic therapist on why we take things personally, what's actually happening underneath, and the small practice that loosens the grip.",
    keywords: [
      "why do I take things personally",
      "personalization psychology",
      "psychodynamic therapy",
      "cognitive distortion personalization",
      "how to stop taking things personally",
    ],
    readMinutes: 6,
    publishedAt: today,
    lede:
      "We personalize because the mind learned early that other people's moods were ours to manage. Taking something personally is rarely a thinking error — it is an old protective reflex doing exactly what it was trained to do.",
    sections: [
      {
        heading: "What personalizing actually is",
        body: [
          "In ordinary use, \"personalizing\" means assuming a neutral or ambiguous event is about you. Your friend is short on the phone, and within seconds you are scanning for what you did wrong. A colleague doesn't reply, and a small dread settles in.",
          "Cognitive frameworks call this a distortion and ask you to argue with it. That can help on the surface. But if the pattern is persistent, it is rarely a thinking error. It is a relational memory.",
        ],
      },
      {
        heading: "Where the reflex comes from",
        body: [
          "Children who grew up around a moody, withdrawn, critical, or unpredictable adult learned, very early, to read that adult's emotional weather. Anticipating it kept them safe. The cost was a lifelong assumption that other people's states are always, in some way, a referendum on them.",
          "This is not weakness. It is a refined skill, built under pressure, that has outlived the conditions that required it.",
        ],
      },
      {
        heading: "The slow work of stepping back",
        body: [
          "The change is not learning to argue with the thought. The change is learning to notice the thought as it arrives — to recognize the small body-clench, the speeding mind, the sudden self-blame — and to greet it as a familiar visitor rather than a verdict.",
          "Over time, in good therapy, the reflex weakens not because you suppressed it but because the original need for it was finally seen, named, and grieved. You stop interpreting the world through the lens of a child who had to.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is personalizing the same as low self-esteem?",
        a: "No. Many high-functioning, accomplished people personalize constantly. It is a relational pattern, not a measure of worth.",
      },
      {
        q: "Can I just stop personalizing on my own?",
        a: "You can soften it with awareness and journaling. The deeper shift usually requires the kind of relationship where the original pattern can finally show itself and be understood — which is what depth therapy provides.",
      },
      {
        q: "How long does it take to change?",
        a: "Insight can come quickly. Embodied change — where you no longer flinch in the old way — typically unfolds over months of consistent work.",
      },
    ],
    related: ["becoming-an-observer-of-yourself", "reacting-vs-responding"],
  },
  {
    slug: "becoming-an-observer-of-yourself",
    bucket: "Meta-Awareness",
    bucketSlug: "meta-awareness",
    title: "Meta-awareness and the observing self",
    metaTitle: "Becoming an Observer of Yourself — Meta-Awareness in Therapy",
    metaDescription:
      "Self-observation is the first real shift in depth therapy. A psychodynamic perspective on what it is, how it develops, and why it changes everything.",
    keywords: [
      "self-observation",
      "meta-awareness",
      "observing self",
      "psychodynamic self-awareness",
      "inner observer",
    ],
    readMinutes: 7,
    publishedAt: today,
    lede:
      "The first and quietest shift in depth work — learning to notice your own patterns as they happen, without being swept into them.",

    sections: [
      {
        heading: "Why it is the first turn",
        body: [
          "Most people arrive in therapy hoping to feel different. Underneath that hope is something more useful: the wish to understand. Understanding requires a small distance — a part of you that can watch the rest of you with curiosity instead of judgment.",
          "Psychodynamic work calls this the observing self. It is not detachment, and it is not analysis. It is presence with what is actually happening inside you.",
        ],
      },
      {
        heading: "How it develops",
        body: [
          "The observer grows in a relationship. Sitting weekly with someone who notices what you do not yet notice — and who reflects it back without alarm — slowly internalizes that same attention inside you.",
          "Over time you begin to catch yourself: in the middle of a familiar reaction, in the tone you take with your partner, in the way your shoulders rise before you have named the feeling.",
        ],
      },
      {
        heading: "What changes once it is there",
        body: [
          "The first thing that changes is the gap. Between a stimulus and your old reaction, there is now a half-second of awareness. That half-second is everything.",
          "From there, the work is no longer about controlling yourself. It is about understanding yourself well enough that the old reactions begin to lose their grip.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this the same as mindfulness?",
        a: "Mindfulness practices help build the muscle. But the observing self that emerges in psychodynamic therapy is also relational — it is shaped by being known by another person, not only by sitting on a cushion.",
      },
      {
        q: "What if I am too self-critical to observe without judgment?",
        a: "That self-criticism is itself worth observing. In therapy we get curious about where it came from and whose voice it actually is.",
      },
      {
        q: "How is this different from overthinking?",
        a: "Overthinking is repetitive, anxious, and stuck in the head. Self-observation is grounded, curious, and includes the body.",
      },
    ],
    related: ["why-we-personalize-everything", "reacting-vs-responding"],
  },
  {
    slug: "reacting-vs-responding",
    bucket: "Meta-Awareness",
    bucketSlug: "meta-awareness",
    title: "The difference between reacting and responding",
    metaTitle: "Reacting vs. Responding — The Pause That Changes Relationships",
    metaDescription:
      "Reacting is automatic and old. Responding is chosen and present. A psychodynamic look at how the gap between them widens through therapy.",
    keywords: [
      "reacting vs responding",
      "emotional reactivity",
      "how to stop reacting emotionally",
      "psychodynamic therapy",
      "self-regulation",
    ],
    readMinutes: 6,
    publishedAt: today,
    lede:
      "A reaction is automatic and shaped by your history. A response is chosen and shaped by the moment in front of you. The work of therapy is widening the space between them.",
    sections: [
      {
        heading: "Reactions are old",
        body: [
          "When you react, you are usually not responding to the person across from you. You are responding to someone you knew long ago — a parent's tone, a sibling's contempt, a teacher's dismissal — that this moment happens to resemble.",
          "This is why your reactions can feel out of proportion to the trigger. They are not, in fact, addressed to the trigger.",
        ],
      },
      {
        heading: "Responses are present",
        body: [
          "A response begins with noticing. It includes the feeling but is not commanded by it. It can pause, ask a question, take a breath, and only then choose what to say or do.",
          "Responses are not lacking in emotion. They are choosing to express your thoughts and feelings in ways that are consistent with your desire to be a kind and mature adult.",

        ],
      },
      {
        heading: "How the gap widens",
        body: [
          "The gap widens as you come to know your own patterns. Once you can recognize the particular shape of your reactivity — the tightening, the speech that wants to escape, the impulse to withdraw — you start to catch it earlier and earlier.",
          "What once took an hour to recover, begins to take ten minutes. Then a minute. Then, sometimes, no time at all.",

        ],
      },
    ],
    faqs: [
      {
        q: "Does this mean suppressing my feelings?",
        a: "No. The feeling is welcome. The work is creating enough room around it that you are not run by it.",
      },
      {
        q: "What if my reactions feel justified?",
        a: "They may be. Responding does not mean abandoning your position. It means arriving at it on purpose rather than by reflex.",
      },
      {
        q: "How long until this becomes natural?",
        a: "Most clients begin to notice meaningful shifts within the first six to twelve months of consistent weekly work.",
      },
    ],
    related: ["becoming-an-observer-of-yourself", "why-we-personalize-everything"],
  },

  // ─────────────────────────────────────────────────────────
  // RELATIONAL DYNAMICS
  // ─────────────────────────────────────────────────────────
  {
    slug: "healthy-vs-problematic-relational-dances",
    bucket: "Relational Dynamics",
    bucketSlug: "relational-dynamics",
    title: "Healthy and problematic relational dances",
    metaTitle: "Relational Dances: Healthy vs. Problematic Patterns",
    metaDescription:
      "Every relationship is a dance. A psychodynamic look at the patterns that nourish us, the ones that wear us down, and how to tell the difference.",
    keywords: [
      "relational patterns",
      "relationship dynamics",
      "psychodynamic therapy relationships",
      "pursuer distancer",
      "healthy vs unhealthy relationships",
    ],
    readMinutes: 7,
    publishedAt: today,
    lede:
      "A relational dance is the unspoken pattern two people fall into over time. Healthy dances allow both people to move freely. Problematic ones lock each person into a role they no longer chose.",
    sections: [
      {
        heading: "What a dance is",
        body: [
          "In any close relationship, two people develop a shared choreography — who reaches first, who softens, who pursues, who withdraws, who carries the mood of the household. Some of this is functional. Some of it is unconscious and old.",
          "Trouble begins when the steps stop being chosen. You start to feel as though you cannot move differently even when you want to.",
        ],
      },
      {
        heading: "Signs the dance is healthy",
        body: [
          "Both people can name what is happening between them. Either person can change the step without the other collapsing. Repair after rupture is possible and not catastrophic. The roles are flexible — sometimes one person carries the weight, sometimes the other.",
          "Most importantly: each person feels more themselves in the relationship, not less.",
        ],
      },
      {
        heading: "Signs the dance is problematic",
        body: [
          "You feel chronically responsible for the other person's emotional state. You shrink, edit, or pre-apologize. The same fight repeats with different facts. You leave most interactions tired.",
          "These are not signs that you are wrong about the relationship. They are signs that the dance has hardened into something that no longer serves either of you.",
        ],
      },
      {
        heading: "Why insight alone rarely changes the dance",
        body: [
          "Knowing the pattern is the beginning, not the end. The reason these dynamics are so persistent is that both people are receiving something from them — even the painful something — and changing the steps means tolerating the discomfort of new ones.",
          "This is the work that psychodynamic therapy is built for: not just seeing the dance, but slowly developing the inner conditions to step out of it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can one person change a dance?",
        a: "Yes. When one partner consistently moves differently, the old choreography no longer works. The other person either adapts or the dynamic surfaces clearly enough to be addressed.",
      },
      {
        q: "Is this only about romantic relationships?",
        a: "No. The same patterns play out with parents, adult siblings, close friends, and colleagues. Often the same dance repeats across all of them.",
      },
      {
        q: "What if my partner won't come to therapy?",
        a: "Individual depth work still changes the relationship, because it changes you — and the dance is a two-person construction.",
      },
    ],
    related: ["projection-in-relationships", "childhood-patterns-in-adult-partnerships"],
  },
  {
    slug: "projection-in-relationships",
    bucket: "Relational Dynamics",
    bucketSlug: "relational-dynamics",
    title: "What projection is and why it matters in your relationships",
    metaTitle: "Projection in Relationships — A Psychodynamic Explanation",
    metaDescription:
      "Projection is one of the most common — and least recognized — drivers of relationship conflict. What it is, how to spot it, and why it matters.",
    keywords: [
      "projection psychology",
      "what is projection",
      "psychological projection in relationships",
      "psychodynamic defense mechanism",
      "projection examples",
    ],
    readMinutes: 6,
    publishedAt: today,
    lede:
      "Projection is the unconscious habit of attributing your own feelings, motives, or qualities to someone else. It is one of the most common reasons close relationships feel inexplicably confusing.",
    sections: [
      {
        heading: "A working definition",
        body: [
          "What we cannot bear to feel in ourselves, we tend to perceive in others. A person uncomfortable with their own anger experiences other people as hostile. A person who cannot acknowledge their own envy sees envy everywhere. A partner unable to feel their own dependency accuses the other of being too needy.",
          "Projection is not lying. It is a real perceptual experience — which is what makes it so difficult to notice from the inside.",
        ],
      },
      {
        heading: "Why it happens",
        body: [
          "The psyche projects to keep something out of awareness that would feel intolerable to know. Often this is something we were taught, very young, was unsafe to have — an emotion that drew punishment, withdrawal, or shame.",
          "Projection is therefore not a character flaw. It is a protective arrangement made long ago that no longer fits the life you are now trying to live.",
        ],
      },
      {
        heading: "How to begin to recognize it",
        body: [
          "When a complaint about another person feels charged out of proportion, or repeats across many different relationships, projection is often part of what is happening. The question to sit with is gentle: \"Is there any version of this quality I am unwilling to see in myself?\"",
          "This is uncomfortable. It is also the doorway. The qualities we most need to reclaim are often the ones we have most insisted are someone else's.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does everyone project?",
        a: "Yes. Projection is a universal defense mechanism. The question is how rigidly and how often, not whether.",
      },
      {
        q: "How do I tell projection from accurate perception?",
        a: "Accurate perception tends to be calm and specific. Projection tends to be charged, repetitive, and resistant to disconfirming information.",
      },
      {
        q: "Can therapy actually change this?",
        a: "Yes. Depth therapy is uniquely suited to it, because the therapeutic relationship is one of the few places projections can be safely noticed, examined, and slowly reclaimed.",
      },
    ],
    related: ["healthy-vs-problematic-relational-dances", "childhood-patterns-in-adult-partnerships"],
  },
  {
    slug: "childhood-patterns-in-adult-partnerships",
    bucket: "Relational Dynamics",
    bucketSlug: "relational-dynamics",
    title: "How childhood patterns follow us into adult partnerships",
    metaTitle: "Childhood Patterns in Adult Relationships — Attachment & Repetition",
    metaDescription:
      "Why the relationship templates we form as children quietly shape who we choose, how we love, and what we expect. A psychodynamic perspective.",
    keywords: [
      "childhood patterns in relationships",
      "attachment theory adult relationships",
      "repetition compulsion",
      "psychodynamic therapy",
      "family of origin",
    ],
    readMinutes: 7,
    publishedAt: today,
    lede:
      "The earliest relationships you had become the unspoken template for the ones you form as an adult — not because you choose to repeat them, but because the nervous system experiences the familiar as safe, even when the familiar was painful.",
    sections: [
      {
        heading: "Templates, not destinies",
        body: [
          "Attachment research and psychodynamic clinical work agree: the way your earliest caregivers met (or failed to meet) your needs becomes an internal working model of what closeness is. That model runs quietly underneath your adult choices.",
          "This does not mean you are doomed to repeat what shaped you. It does mean that change requires meeting the template itself — not just trying harder in your current relationship.",
        ],
      },
      {
        heading: "How the pattern shows up",
        body: [
          "You may find yourself drawn to partners who recreate the emotional climate of your childhood home — distant, critical, unpredictable, emotionally unavailable — even when you consciously want the opposite. You may feel inexplicably uneasy when you finally encounter steadiness and warmth.",
          "Or you may find yourself in the same fight, year after year, with different people. The faces change. The choreography is the same.",
        ],
      },
      {
        heading: "What it takes to shift it",
        body: [
          "Insight is the first step, not the cure. The template loosens through a sustained relationship — therapeutic, then ideally personal — in which old expectations are repeatedly disconfirmed and slowly updated.",
          "Psychodynamic therapy creates exactly that kind of relationship. The therapeutic frame is the space where the pattern can finally be seen as it arises, in real time, with someone trained to notice it and steady enough to hold it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this the same as attachment style?",
        a: "Attachment style is one useful lens on it. Psychodynamic work goes further: it engages the specific story, history, and unconscious meaning of your particular template, not just its category.",
      },
      {
        q: "What if I had a good childhood?",
        a: "Even loving childhoods leave templates. They are simply less obvious. The goal is awareness, not blame.",
      },
      {
        q: "Can a healthy adult relationship heal this on its own?",
        a: "It can do real repair. Therapy accelerates and deepens the process by making the templates themselves available to be worked with directly.",
      },
    ],
    related: ["healthy-vs-problematic-relational-dances", "projection-in-relationships"],
  },

  // ─────────────────────────────────────────────────────────
  // NERVOUS SYSTEM REGULATION
  // ─────────────────────────────────────────────────────────
  {
    slug: "vagus-nerve-how-to-soothe-it",
    bucket: "Nervous System Regulation",
    bucketSlug: "nervous-system",
    title: "The Vagus nerve: what it is and how to soothe it",
    metaTitle: "The Vagus Nerve, Explained — and How to Soothe It",
    metaDescription:
      "A plain-language explanation of the vagus nerve, why it matters for anxiety and emotional regulation, and gentle practices that genuinely calm it.",
    keywords: [
      "vagus nerve",
      "how to stimulate vagus nerve",
      "vagal tone",
      "polyvagal theory",
      "nervous system regulation",
    ],
    readMinutes: 7,
    publishedAt: today,
    lede:
      "The vagus nerve is the longest cranial nerve in the body and the main pathway by which the parasympathetic nervous system tells you that you are safe. Soothing it is one of the most reliable ways to bring an anxious system back to ground.",
    sections: [
      {
        heading: "What it is, in plain language",
        body: [
          "The vagus nerve runs from your brainstem down through your face, throat, heart, lungs, and gut. It is the body's primary \"all clear\" signal — when it is active, your heart rate slows, your breath deepens, and you can think, listen, and connect.",
          "When it is underactive, the body remains in low-grade alarm. Many people who describe themselves as anxious, irritable, or chronically braced are living in exactly this state.",
        ],
      },
      {
        heading: "Why it matters for emotional life",
        body: [
          "You cannot do depth work — or have a real conversation, or be intimate, or sleep well — from a body that thinks it is in danger. The vagus nerve is the physiology of safety. Without it engaged, every other strategy is rowing upstream.",
          "This is why therapists increasingly attend to the body. Insight without nervous-system regulation is fragile.",
        ],
      },
      {
        heading: "Practices that actually engage it",
        body: [
          "Slow exhales (longer than your inhale) directly stimulate the vagus nerve. So does humming, gentle singing, gargling, and cold water on the face. The most underrated practice is simply being in the steady presence of another regulated person — what's called co-regulation. It is, in a real sense, what therapy is.",
          "Consistency matters more than intensity. Two minutes of slow breathing, three times a day, will do more than one long session once a week.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this the same as polyvagal theory?",
        a: "Polyvagal theory, developed by Stephen Porges, is the most widely used clinical framework for understanding vagal function and its role in safety, connection, and threat responses.",
      },
      {
        q: "How long until I notice a difference from these practices?",
        a: "Many people notice immediate calming within minutes. Lasting change in baseline vagal tone typically takes weeks to months of consistent practice.",
      },
      {
        q: "Do I still need therapy if I do these practices?",
        a: "Regulation practices and depth therapy do different things. Practices calm the body in the moment; therapy addresses why the body became dysregulated in the first place. They work best together.",
      },
    ],
    related: ["gratitude-and-fear-cannot-coexist", "psychology-of-breath"],
  },
  {
    slug: "gratitude-and-fear-cannot-coexist",
    bucket: "Nervous System Regulation",
    bucketSlug: "nervous-system",
    title: "Why you can't be grateful and afraid at the same time",
    metaTitle: "Why Gratitude and Fear Cannot Coexist in the Body",
    metaDescription:
      "Gratitude is not a mood — it is a physiological state. A look at why it cannot share the body with fear, and what that means for daily practice.",
    keywords: [
      "gratitude and anxiety",
      "gratitude practice",
      "parasympathetic nervous system",
      "polyvagal gratitude",
      "anxiety regulation",
    ],
    readMinutes: 5,
    publishedAt: today,
    lede:
      "Gratitude and fear cannot occupy the same nervous system at the same time. They run on opposite branches of it. This is why a genuine gratitude practice is not just sentimental — it is physiological.",
    sections: [
      {
        heading: "Two systems, one body",
        body: [
          "The sympathetic nervous system mobilizes you for threat: faster heart, shallower breath, narrower attention. The parasympathetic system restores you to safety: slower heart, deeper breath, wider attention.",
          "Fear is sympathetic. Gratitude — when it is felt, not merely thought — is parasympathetic. The body cannot run both programs at once.",
        ],
      },
      {
        heading: "Why \"thinking grateful thoughts\" often fails",
        body: [
          "A list of things you are grateful for, written in a clenched body, changes very little. The shift happens when gratitude is allowed to be felt in the body — when you actually let the warmth of one specific thing land.",
          "One genuine moment of felt gratitude per day will do more for an anxious nervous system than a long list rushed through before bed.",
        ],
      },
      {
        heading: "How to use this in real life",
        body: [
          "When fear rises, do not argue with it. Instead, find one concrete, present thing to be grateful for — the weight of your feet on the floor, the warmth of a cup in your hands, a person who is somewhere right now and loves you — and let it land for a slow breath.",
          "You are not denying the fear. You are giving the body access to its other branch.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this just toxic positivity?",
        a: "No. Toxic positivity denies difficult feelings. This practice does not deny the fear; it gives the body a brief, real experience of the opposing state.",
      },
      {
        q: "Does this work for clinical anxiety or trauma?",
        a: "It is helpful but not sufficient. Significant anxiety or trauma calls for depth therapy alongside regulation practices.",
      },
      {
        q: "How long should I hold the gratitude?",
        a: "Long enough for the body to register it — usually a slow exhale or two. Quality, not duration, is the measure.",
      },
    ],
    related: ["vagus-nerve-how-to-soothe-it", "psychology-of-breath"],
  },
  {
    slug: "psychology-of-breath",
    bucket: "Nervous System Regulation",
    bucketSlug: "nervous-system",
    title: "The psychology of breath — why it works",
    metaTitle: "The Psychology of Breath — Why Slow Breathing Calms the Mind",
    metaDescription:
      "Breath is the one autonomic process you can consciously change. Here is why that single fact has more clinical power than almost anything else.",
    keywords: [
      "psychology of breath",
      "breathwork anxiety",
      "slow breathing",
      "diaphragmatic breathing",
      "breath nervous system",
    ],
    readMinutes: 5,
    publishedAt: today,
    lede:
      "Breath is the only autonomic process you can consciously override. That single fact gives it more clinical power than almost any other self-regulation tool — because through breath, you can speak directly to a nervous system that does not understand words.",
    sections: [
      {
        heading: "The bridge between systems",
        body: [
          "Heart rate, digestion, and blood pressure run on their own. You cannot decide to slow your heart. But you can decide to slow your breath, and a slower breath quietly recalibrates everything else.",
          "Breath is therefore the bridge between voluntary and involuntary — the one place where conscious choice meets autonomic physiology.",
        ],
      },
      {
        heading: "Why the exhale matters more than the inhale",
        body: [
          "Inhales subtly activate the sympathetic system. Exhales activate the parasympathetic one. This is why almost every effective breath practice — for anxiety, for sleep, for grounding — emphasizes a longer exhale than inhale.",
          "A simple version: inhale for four counts, exhale for six. Repeat for two minutes. Notice what shifts.",
        ],
      },
      {
        heading: "Breath and the inner life",
        body: [
          "There is a reason every contemplative tradition begins with the breath. It is the most reliably available anchor we have to the present moment, and the present moment is the only place real change can happen.",
          "In depth therapy, attention to breath also reveals where a person is holding — the catch in the chest when a memory surfaces, the held breath before a difficult truth. The breath knows what the words do not yet.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should I practice?",
        a: "Two minutes, three times a day, will create more change than one long session per week. Frequency matters more than duration.",
      },
      {
        q: "What if slow breathing makes me more anxious?",
        a: "For some people, especially with a trauma history, deep breathing can feel destabilizing at first. Start very gently, and consider doing it with a therapist's support.",
      },
      {
        q: "Is there a best technique?",
        a: "Any pattern with a longer exhale than inhale will help. Box breathing, 4-7-8, and simple coherence breathing all work.",
      },
    ],
    related: ["vagus-nerve-how-to-soothe-it", "gratitude-and-fear-cannot-coexist"],
  },

  // ─────────────────────────────────────────────────────────
  // FOR THERAPISTS
  // ─────────────────────────────────────────────────────────
  {
    slug: "why-therapists-need-therapy",
    bucket: "For Therapists",
    bucketSlug: "for-therapists",
    title: "Why therapists need therapy too",
    metaTitle: "Why Therapists Need Their Own Therapy — A Senior Clinician's View",
    metaDescription:
      "After thirty-four years in the field, a reflection on why personal therapy is not optional for clinicians — it is the work that makes the work possible.",
    keywords: [
      "therapy for therapists",
      "therapist personal therapy",
      "clinician self-care",
      "vicarious trauma",
      "psychodynamic supervision",
    ],
    readMinutes: 6,
    publishedAt: today,
    lede:
      "Therapists need their own therapy because we are the instrument of the work. An instrument that is never tuned, never rested, and never tended will eventually stop being trustworthy — to our clients and to ourselves.",
    sections: [
      {
        heading: "We came to this field carrying something",
        body: [
          "Most clinicians can trace their calling to a difficult experience that taught them, very early, how to read a room and hold a feeling. That history is part of why we are good at this work. It is also part of what asks for ongoing tending.",
          "Personal therapy is where the original material can keep being known, rather than quietly leaking into the consulting room as countertransference we did not catch in time.",
        ],
      },
      {
        heading: "Supervision is not the same",
        body: [
          "Supervision and consultation are about the client. Personal therapy is about you. Both are necessary; neither substitutes for the other.",
          "A therapist without their own therapy is left to do their own emotional processing alone, in stolen moments, with no one trained to meet it. That is not sustainable for the length of a career.",
        ],
      },
      {
        heading: "What makes it different for clinicians",
        body: [
          "Therapists need a therapist who is unafraid of the field — someone who can hold the specific weight of vicarious trauma, ethical strain, professional isolation, and the strange loneliness of holding space for a living.",
          "It is also a relief to sit with a colleague who understands the work from the inside, where you do not have to translate or contextualize what you do.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should a working therapist be in their own therapy?",
        a: "Many depth-oriented clinicians stay in weekly therapy throughout their careers. Others move in and out of it as life and work require. There is no single right answer; consistent engagement matters more than frequency.",
      },
      {
        q: "Is it ethical to see a therapist who is in my professional community?",
        a: "It is common, and it works best with explicit attention to boundaries — referral patterns, social overlap, conferences. A senior clinician will set this up clearly at the start.",
      },
      {
        q: "What if I cannot afford ongoing personal therapy?",
        a: "This is a real strain. Many therapists work out sliding arrangements, longer intervals, or focused chapters of work. Doing some is better than doing none.",
      },
    ],
    related: ["emotional-cost-of-holding-space"],
  },
  {
    slug: "emotional-cost-of-holding-space",
    bucket: "For Therapists",
    bucketSlug: "for-therapists",
    title: "The emotional cost of holding space for others",
    metaTitle: "The Emotional Cost of Holding Space — Burnout, Compassion Fatigue, and Repair",
    metaDescription:
      "Holding space for a living has a quiet, cumulative cost. A senior clinician on what it looks like, why it is rarely named, and what genuine repair requires.",
    keywords: [
      "compassion fatigue",
      "therapist burnout",
      "vicarious trauma",
      "holding space",
      "clinician self-care",
    ],
    readMinutes: 7,
    publishedAt: today,
    lede:
      "Holding space for a living is one of the most quietly demanding things a person can do. The cost is rarely dramatic. It is cumulative — and because it accrues slowly, it is easy to mistake for something else.",
    sections: [
      {
        heading: "What the cost actually looks like",
        body: [
          "It is not always the textbook picture of burnout. More often it is a quiet flatness. A reluctance to return calls. A growing impatience at home. A sense that you have nothing left for the people you most want to give to.",
          "Sometimes it shows up in the body first — disrupted sleep, a tightness that will not loosen, the dread of Monday morning that has crept in without your noticing.",
        ],
      },
      {
        heading: "Why it is rarely named",
        body: [
          "Therapists are trained to hold, not to be held. We are skilled at translating our own difficulty into something tolerable, often before we have fully felt it. We tell ourselves we are tired and mean something deeper.",
          "The professional culture, despite better awareness in recent years, still subtly rewards endurance over honesty.",
        ],
      },
      {
        heading: "What genuine repair requires",
        body: [
          "Rest helps. Boundaries help. Supervision helps. None of them, by themselves, restore what depth work over many years quietly draws down.",
          "Repair requires a place where you do not have to be the practitioner — where your own material can be the material. That is what personal therapy is for, and what no amount of consultation, journaling, or self-care can substitute for.",
        ],
      },
      {
        heading: "A note on the long view",
        body: [
          "The clinicians who sustain this work for thirty or forty years are not the ones who are toughest. They are the ones who took their own care seriously enough, early enough, that the work could continue to feed them as well as cost them.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is compassion fatigue different from burnout?",
        a: "Burnout is broader exhaustion from work conditions. Compassion fatigue is the specific cost of repeated empathic engagement with suffering. Most clinicians experience some of both.",
      },
      {
        q: "What is vicarious trauma?",
        a: "Vicarious trauma is the trauma-like response that can develop in clinicians who repeatedly witness the trauma of others. It can include intrusive thoughts, hypervigilance, and changes in worldview.",
      },
      {
        q: "Can I recover without leaving the field?",
        a: "Yes, and most do. Recovery typically involves a combination of personal therapy, adjusted caseload, and consistent practices that restore the nervous system over time.",
      },
    ],
    related: ["why-therapists-need-therapy"],
  },

  // ─────────────────────────────────────────────────────────
  // PRESENTING CONCERNS (topical landing articles)
  // ─────────────────────────────────────────────────────────
  {
    slug: "anxiety",
    bucket: "Presenting Concerns",
    bucketSlug: "presenting-concerns",
    title: "Anxiety — and what depth therapy actually offers",
    metaTitle: "Anxiety Therapy in Atlanta | Gail A. Phillips, LCSW",
    metaDescription:
      "A psychodynamic perspective on anxiety — what it is beneath the symptoms, why coping strategies alone rarely settle it, and how depth therapy in Buckhead and virtually in GA & FL can help.",
    keywords: [
      "anxiety therapy Atlanta",
      "anxiety therapist Buckhead",
      "psychodynamic therapy for anxiety",
      "generalized anxiety treatment",
      "anxiety counseling Georgia",
    ],
    readMinutes: 6,
    publishedAt: today,
    lede:
      "Anxiety is rarely only what it appears to be. Beneath the racing thoughts and held breath is usually an older protective system — one that learned, long before you could name it, that vigilance was the price of safety.",
    sections: [
      {
        heading: "What anxiety often is, underneath",
        body: [
          "Generalized anxiety, social anxiety, and chronic worry can look like a thinking problem — a mind that won't quiet down. In depth work, we more often find a relational and historical pattern: a nervous system that was organized, early, around someone else's moods, expectations, or unpredictability.",
          "Coping strategies can take the edge off. They rarely change the underlying arrangement. What does change it is understanding where the alarm came from, and slowly experiencing — inside a steady therapeutic relationship — that the original conditions no longer apply.",
        ],
      },
      {
        heading: "When anxiety has 'always been there'",
        body: [
          "Many of the people I work with have lived with anxiety as background weather for decades. They have tried medication, CBT, meditation apps, books. Some of it helped. None of it touched the root.",
          "That isn't a failure of effort. It's a sign that the anxiety is doing structural work — protecting something, organizing relationships, keeping certain feelings at bay. Depth therapy gets curious about that work rather than trying to argue it away.",
        ],
      },
      {
        heading: "What the work looks like in practice",
        body: [
          "We meet weekly. We pay attention to what surfaces — in the room, in your week, in your dreams, in the small reactions that used to pass unnoticed. Over time, the anxiety becomes legible. It begins to soften not because you suppressed it, but because what it was protecting has finally been seen.",
          "This is patient, relational, intelligent work. It is suited to thoughtful adults who want to understand themselves, not just feel better for a week.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can therapy actually change chronic anxiety?",
        a: "Yes. The structural shifts that depth therapy aims for — in how you relate, regulate, and understand yourself — are exactly what chronic anxiety responds to over time.",
      },
      {
        q: "Do I need to be in crisis to start?",
        a: "No. Most of the people I work with are functioning well externally and simply ready to address something that has followed them for a long time.",
      },
      {
        q: "Do you work with anxiety alongside medication?",
        a: "Yes. I coordinate with prescribing clinicians when that is part of the picture. Therapy and medication are not in competition.",
      },
    ],
    related: ["depression", "relationships", "becoming-an-observer-of-yourself"],
  },
  {
    slug: "depression",
    bucket: "Presenting Concerns",
    bucketSlug: "presenting-concerns",
    title: "Depression — and the deeper work beneath relief",
    metaTitle: "Depression Therapy in Atlanta | Gail A. Phillips, LCSW",
    metaDescription:
      "A psychodynamic view of depression — what it can be saying, why surface relief often doesn't hold, and how depth therapy in Buckhead and virtually in GA & FL meets it.",
    keywords: [
      "depression therapy Atlanta",
      "depression therapist Buckhead",
      "psychodynamic therapy for depression",
      "chronic depression treatment",
      "depression counseling Georgia",
    ],
    readMinutes: 6,
    publishedAt: today,
    lede:
      "Depression is not only sadness, and it is not only a chemistry problem. It is often a meaningful response of a whole life — to loss not fully grieved, to needs long unmet, to a self that has had to be smaller than it is.",
    sections: [
      {
        heading: "Depression as message, not malfunction",
        body: [
          "The flat affect, the loss of pleasure, the heaviness that makes ordinary tasks feel impossible — these are real symptoms that deserve real care. They are also, often, the surface of something the rest of you has been carrying alone for a long time.",
          "Depth therapy treats depression as something to be understood rather than only managed. We listen for what it is protesting, what it is mourning, what it is asking for that life hasn't yet given.",
        ],
      },
      {
        heading: "When relief hasn't held",
        body: [
          "Many clients arrive having had earlier rounds of treatment that helped for a while. Medication lifted the floor; brief therapy gave them tools. Then the depression returned, sometimes quieter, sometimes louder.",
          "When that pattern repeats, it usually means the underlying psychological structure that generated the depression hasn't yet been addressed. Real, durable change comes from doing that deeper work — not from trying harder at the same surface strategies.",
        ],
      },
      {
        heading: "What this looks like over time",
        body: [
          "The work is slow and serious. It includes both insight — understanding how earlier life shaped the patterns that keep you depressed — and the lived experience of a steady, attentive relationship in which the depressed parts of you can finally show themselves and be met.",
          "Most clients begin to notice meaningful shifts within the first six to twelve months. The aim is not just remission, but a self that no longer needs to depress.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is depth therapy appropriate for severe depression?",
        a: "It can be, with the right coordination. For active suicidality or presentations requiring an interdisciplinary team, a higher level of care comes first. We can talk about fit in a complimentary consultation.",
      },
      {
        q: "Will I have to revisit painful childhood material?",
        a: "Only as it surfaces and only at a pace you can hold. Depth work is patient, not invasive.",
      },
      {
        q: "Do you work alongside a psychiatrist?",
        a: "Yes. Coordinating with a prescriber when medication is part of the picture is a normal part of the work.",
      },
    ],
    related: ["anxiety", "relationships", "reacting-vs-responding"],
  },
  {
    slug: "relationships",
    bucket: "Presenting Concerns",
    bucketSlug: "presenting-concerns",
    title: "Relationship problems — and the patterns underneath",
    metaTitle: "Relationship Therapy in Atlanta | Gail A. Phillips, LCSW",
    metaDescription:
      "A psychodynamic look at relationship problems — repeating patterns, narcissistic dynamics, and what it takes to actually change the dance. Buckhead and virtual in GA & FL.",
    keywords: [
      "relationship therapy Atlanta",
      "couples patterns therapist",
      "psychodynamic relationship therapy",
      "narcissistic relationship therapy",
      "relationship counseling Buckhead",
    ],
    readMinutes: 6,
    publishedAt: today,
    lede:
      "Most persistent relationship problems are not really about the current relationship. They are old patterns showing up in new clothes — choreographies learned long ago that no longer fit the life you are trying to live.",
    sections: [
      {
        heading: "Why the same problem keeps appearing",
        body: [
          "If you have noticed yourself in the same painful dynamic across partners, friendships, or family — feeling unseen, over-accommodating, chronically responsible for someone else's mood — you are watching a pattern, not a string of bad luck.",
          "These patterns were usually learned in childhood, where they were the most adaptive thing available. They become a problem when they outlive the conditions that required them.",
        ],
      },
      {
        heading: "When the relationship itself is difficult",
        body: [
          "Some clients come because of a partner, parent, or colleague with a difficult or narcissistic personality. Individual depth work doesn't change the other person. It does change you — the parts that participate, accommodate, or doubt your own perception — and that almost always changes the relationship.",
          "Sometimes the work clarifies what is workable and what is not. That clarity, by itself, is often a relief.",
        ],
      },
      {
        heading: "What changes",
        body: [
          "As the old pattern becomes visible and the inner conditions that maintained it begin to shift, you stop being recruited automatically into the same dance. You become harder to destabilize. You can hold your ground without becoming hard, and soften without disappearing.",
          "The relationships that can grow with you do. The ones that couldn't tend to surface clearly, on their own.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you do couples therapy?",
        a: "My practice is individual depth work. That said, individual therapy frequently and meaningfully changes the relationships you are in.",
      },
      {
        q: "Can I do this work if my partner won't?",
        a: "Yes. The dance is a two-person construction; when one person consistently moves differently, the choreography has to change.",
      },
      {
        q: "How long does relational change take?",
        a: "Insight comes early. Embodied change in how you relate typically unfolds over six to eighteen months of consistent weekly work.",
      },
    ],
    related: ["healthy-vs-problematic-relational-dances", "projection-in-relationships", "childhood-patterns-in-adult-partnerships"],
  },
];

export const articlesBySlug: Record<string, Article> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);

export const articleSlugs = articles.map((a) => a.slug);

export const articlesByBucket = articles.reduce<Record<string, Article[]>>((acc, a) => {
  (acc[a.bucket] ||= []).push(a);
  return acc;
}, {});
