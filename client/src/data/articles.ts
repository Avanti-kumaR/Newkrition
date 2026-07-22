/**
 * NUKRITION — Article data store.
 * Add new articles here; pages derive all content from this file.
 */
export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  body: ArticleBlock[];
}

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "ul"; items: string[] };

export const ARTICLES: Article[] = [
  /* ------------------------------------------------------------------ */
  /* FEATURED — fully researched launch article                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "why-your-energy-crashes-at-3pm",
    category: "Hormonal Health",
    featured: true,
    title:
      "Why Your Energy Crashes at 3pm — and What Your Hormones Are Trying to Tell You",
    excerpt:
      "That mid-afternoon slump is not a willpower problem. It is a signal. Understanding the cortisol–insulin conversation happening in your body is the first step to reclaiming your afternoons — and your evenings.",
    readTime: "7 min read",
    date: "July 2025",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80&auto=format&fit=crop",
    body: [
      {
        type: "p",
        text: "It is 3:07pm. You have eaten lunch, you have had your coffee, and yet you are staring at your screen with the cognitive clarity of a damp sponge. You reach for something sweet. You wonder, briefly, whether you are simply lazy. You are not.",
      },
      {
        type: "p",
        text: "The mid-afternoon energy crash is one of the most common complaints I hear from clients — and one of the most misunderstood. It is not a character flaw. It is a physiological event, shaped by two hormones that are in constant, often contentious, conversation: cortisol and insulin.",
      },
      {
        type: "h2",
        text: "The Cortisol Curve",
      },
      {
        type: "p",
        text: "Cortisol follows a predictable daily arc — high in the morning (it is partly responsible for waking you up), then declining steadily across the day. By mid-afternoon, cortisol is naturally at one of its lowest points. In a well-regulated system, this is a gentle dip. In a system under chronic stress, or one that has been running on too little sleep and too much caffeine, that dip becomes a cliff.",
      },
      {
        type: "p",
        text: "Research published in the journal Nutrients confirms that women who skip breakfast have significantly elevated cortisol throughout the mid-morning — which then drops more sharply in the afternoon, amplifying the slump. The body, having been denied a morning signal to regulate blood sugar, overcorrects later in the day.",
      },
      {
        type: "blockquote",
        text: "Cortisol is not simply a stress hormone. It is a blood-sugar regulator, an anti-inflammatory, and a key driver of your circadian energy rhythm. When it misfires, everything downstream feels it.",
      },
      {
        type: "h2",
        text: "The Insulin Connection",
      },
      {
        type: "p",
        text: "Cortisol and insulin are metabolic opposites. Cortisol raises blood glucose; insulin lowers it. When cortisol spikes — whether from stress, poor sleep, or a high-glycaemic lunch — the pancreas releases insulin to compensate. If that insulin response is disproportionate (common in women with any degree of insulin resistance, including those with PCOS or perimenopause), blood sugar drops sharply. That drop is your 3pm crash.",
      },
      {
        type: "p",
        text: "The sugar craving that follows is not greed. It is your hypothalamus detecting low glucose and sending an urgent request for fast fuel. The problem is that responding with a biscuit or a sugary coffee simply restarts the cycle — another spike, another crash, another craving, an hour later.",
      },
      {
        type: "h2",
        text: "Why Women Are Disproportionately Affected",
      },
      {
        type: "p",
        text: "Women's bodies are more sensitive to fluctuations in blood sugar and cortisol than men's — a difference that becomes more pronounced across the menstrual cycle. In the luteal phase (the two weeks before your period), progesterone rises and insulin sensitivity decreases slightly, making blood sugar harder to regulate. This is why the afternoon crash often feels worse in the second half of your cycle.",
      },
      {
        type: "p",
        text: "Perimenopause adds another layer: as oestrogen declines, its protective effect on insulin sensitivity diminishes, and cortisol patterns can become more erratic. Many women in their forties describe the afternoon slump as a new and unwelcome arrival — and they are right. It often is.",
      },
      {
        type: "h2",
        text: "What to Do About It",
      },
      {
        type: "p",
        text: "The good news is that the cortisol–insulin cycle is highly responsive to nutritional intervention. These are not quick fixes — they are structural changes that, applied consistently, reshape the hormonal landscape of your afternoon.",
      },
      {
        type: "ul",
        items: [
          "Eat breakfast within 90 minutes of waking. A protein-forward breakfast (eggs, Greek yoghurt, smoked salmon) blunts the morning cortisol spike and sets a more stable blood-sugar baseline for the day.",
          "Anchor your lunch with protein and fibre. A lunch that is predominantly refined carbohydrate — pasta, white bread, rice — will produce a pronounced insulin response. Pair carbohydrates with protein, fat, and fibre to slow glucose absorption.",
          "Consider a mid-morning snack if your gap between breakfast and lunch exceeds five hours. A small handful of nuts or a boiled egg prevents the blood-sugar trough that amplifies the afternoon crash.",
          "Manage your caffeine timing. Caffeine raises cortisol. Drinking coffee before 10am (when cortisol is already high) is less disruptive than drinking it at 11am or noon, when it can artificially extend the cortisol curve and make the subsequent drop steeper.",
          "Prioritise sleep. A single night of poor sleep raises cortisol the following afternoon by a measurable margin. Sleep is not a lifestyle luxury — it is a hormonal intervention.",
        ],
      },
      {
        type: "h2",
        text: "A Note on Supplements",
      },
      {
        type: "p",
        text: "Magnesium glycinate, ashwagandha, and phosphatidylserine have evidence supporting their role in cortisol regulation. However, supplementation without addressing the underlying dietary and lifestyle drivers is like painting over damp walls. The structural work comes first.",
      },
      {
        type: "h2",
        text: "The Bigger Picture",
      },
      {
        type: "p",
        text: "The 3pm crash is rarely an isolated event. It is a window into the broader hormonal conversation your body is having — about stress load, sleep quality, blood-sugar regulation, and the cumulative cost of a lifestyle that asks more than it gives back. When clients address it properly, they do not just reclaim their afternoons. They reclaim their evenings, their sleep, and their mornings too.",
      },
      {
        type: "p",
        text: "If this pattern feels familiar, it is worth looking at the whole picture — not just the 3pm moment, but everything that led to it.",
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Supporting articles                                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "gut-hormone-axis",
    category: "Nutrition Science",
    title: "The Gut–Hormone Axis: What Every Woman Should Know",
    excerpt:
      "Your gut microbiome and your endocrine system are in constant conversation. Here is what the research says — and what it means for your plate.",
    readTime: "5 min read",
    date: "June 2025",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&auto=format&fit=crop",
    body: [
      { type: "p", text: "This article is coming soon. Check back shortly for the full piece." },
    ],
  },
  {
    slug: "sleep-cortisol-doing-too-much",
    category: "Lifestyle",
    title: "Sleep, Cortisol, and the Hidden Cost of Doing Too Much",
    excerpt:
      "Chronic overcommitment is a hormonal event, not just a scheduling problem. How to read the signs before your body forces the conversation.",
    readTime: "6 min read",
    date: "June 2025",
    image:
      "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&q=80&auto=format&fit=crop",
    body: [
      { type: "p", text: "This article is coming soon. Check back shortly for the full piece." },
    ],
  },
  {
    slug: "what-happens-in-your-first-nukrition-session",
    category: "The Program",
    title: "What Happens in Your First Nukrition Session",
    excerpt:
      "A transparent look at the clinical intake process — what we cover, why it matters, and how it shapes everything that follows.",
    readTime: "4 min read",
    date: "May 2025",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop",
    body: [
      { type: "p", text: "This article is coming soon. Check back shortly for the full piece." },
    ],
  },
  {
    slug: "iron-fatigue-the-diagnosis-that-gets-missed",
    category: "Hormonal Health",
    title: "Iron, Fatigue, and the Diagnosis That Gets Missed",
    excerpt:
      "Ferritin is not the same as iron. Many women with 'normal' blood results are still functionally depleted. Here is how to read your own numbers.",
    readTime: "8 min read",
    date: "May 2025",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80&auto=format&fit=crop",
    body: [
      { type: "p", text: "This article is coming soon. Check back shortly for the full piece." },
    ],
  },
  {
    slug: "the-problem-with-eating-healthy-as-a-goal",
    category: "Mindset",
    title: "The Problem With 'Eating Healthy' as a Goal",
    excerpt:
      "Vague intentions produce vague results. How to set nutrition goals that are specific enough to actually change your biochemistry.",
    readTime: "5 min read",
    date: "April 2025",
    image:
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&q=80&auto=format&fit=crop",
    body: [
      { type: "p", text: "This article is coming soon. Check back shortly for the full piece." },
    ],
  },
];

export const FEATURED_ARTICLE = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
export const RECENT_ARTICLES = ARTICLES.filter((a) => !a.featured);

