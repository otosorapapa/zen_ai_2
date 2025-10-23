import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";
import { PRIMARY_CTA } from "@/lib/ctaVariants";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  JapaneseYen,
  LineChart,
  Lock,
  Phone,
  PiggyBank,
  PieChart,
  ShieldCheck,
  Sparkle,
  Timer,
} from "lucide-react";

const heroStats = [
  {
    label: "意思決定までの時間削減",
    value: 50,
    suffix: "%",
    duration: 1400,
    annotation: "AIレポート導入後の平均削減率",
  },
  {
    label: "会議準備にかかる時間短縮",
    value: 66,
    suffix: "%",
    duration: 1600,
    annotation: "資料作成・根拠整理の自動化",
  },
  {
    label: "キャッシュ創出インパクト",
    value: 1.8,
    suffix: "倍",
    duration: 1800,
    annotation: "AIが提案した施策採用案件",
    decimals: 1,
  },
  {
    label: "年間で削減した単純作業",
    value: 1200,
    suffix: "時間",
    duration: 1900,
    annotation: "AI自動化で創出した意思決定時間",
  },
];

const heroChecklist = [
  "現場に依存した管理会計で、粗利と案件別の原価がすぐに把握できない",
  "資金繰り表が更新されず、翌月の支払いと投資判断に常に不安が残る",
  "製造・建設プロジェクトの進捗とキャッシュのズレが会議で共有されない",
];

const heroSolutionHighlights = [
  "AIダッシュボードが粗利とキャッシュの差異要因を10分で図解し、優先すべき現場アクションを自動提示",
  "週1回のAIレポートで管理会計と資金繰りを一本化し、意思決定までの時間を平均50%削減",
  "2ステップの無料経営診断フォームから、翌営業日に実行ロードマップと資金計画案を共有",
];

const servicePillars = [
  {
    icon: BrainCircuit,
    title: "生成AI",
    description:
      "経営指標・現場の声・未整理のナレッジをリアルタイムで取り込み、生成AIが複数シナリオと期待インパクトを提示。意思決定と実行が一気通貫でつながります。",
  },
  {
    icon: BarChart3,
    title: "管理会計",
    description:
      "部門別KPIとキャッシュドライバーを可視化し、AIが示す打ち手と収益インパクトを同じ画面で確認。経営会議が即アクションに転換します。",
  },
  {
    icon: PiggyBank,
    title: "資金繰り",
    description:
      "資金ショートの兆しと投資余力を生成AIが確率で示し、資本政策や投資計画の意思決定を後押しします。",
  },
];

const proofPoints = [
  {
    icon: Sparkle,
    title: "生成AIワークフロー",
    description:
      "furumachi-smec.lognowa.com のデモ同様、分散したデータを束ねて粗利改善・在庫最適化のシナリオを即時生成。",
  },
  {
    icon: BarChart3,
    title: "ワンクリック経営ダッシュボード",
    description:
      "会計・販売・Excelを統合し、生成AIが粗利・LTV・キャッシュのギャップを事業別に可視化します。",
  },
  {
    icon: BrainCircuit,
    title: "伴走型AIトレーニング",
    description:
      "現場の会議と定例業務にAIを定着させ、社長が未来の成長シナリオ選定に専念できる体制を構築します。",
  },
];

const aiVisualHighlights = [
  {
    icon: LineChart,
    title: "粗利ドライバーの即時解析",
    description: "AIが売上・粗利・在庫の変動要因をグラフで提示し、注力領域を数分で判断。",
  },
  {
    icon: PieChart,
    title: "キャッシュフロー予測",
    description: "3ヶ月先の資金曲線と投資余力を自動算出。投資判断に必要な指標が揃います。",
  },
];

const HeroSection = () => {
  const scrollToContact = () => {
    const ctaSection = document.getElementById("cta-section");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSimulator = () => {
    const simulatorSection = document.getElementById("ai-simulator");
    simulatorSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-slate-100/50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-curve-overlay" />
        <div className="hero-aurora hero-aurora--one" />
        <div className="hero-aurora hero-aurora--two" />
        <div className="hero-aurora hero-aurora--three" />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 pb-20 pt-20 md:pb-24 md:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
            <div className="space-y-10 lg:pr-8">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-highlight/15 px-5 py-2 text-[0.95rem] font-semibold uppercase tracking-[0.28em] text-highlight-foreground">
                    年商5,000万円～15億円企業限定
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-[0.85rem] font-semibold uppercase tracking-[0.28em] text-accent">
                    3ヶ月集中プログラム
                  </span>
                </div>
                <h1 className="text-balance text-3xl font-bold leading-[1.25] text-foreground md:text-4xl lg:text-[3.05rem] lg:leading-[1.25]">
                  リアルタイムAIで意思決定時間を1/2に。資金繰りと売上を同時改善
                </h1>
                <div className="space-y-3 rounded-3xl bg-white/92 px-6 py-5 shadow-lg shadow-primary/10 ring-1 ring-primary/15">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
                    製造業・建設業の中小企業経営者向け
                  </p>
                  <div className="space-y-2 text-[1.05rem] leading-relaxed text-muted-foreground md:text-lg">
                    <p>furumachi-smec.lognowa.com の生成AIが会計・現場・市場データをリアルタイムで束ね、意思決定に必要な数字と根拠を同じ画面で提示。</p>
                    <p>経営者は最適シナリオを選ぶだけで、粗利改善と資金計画が自動で整います。</p>
                  </div>
                </div>
                <div className="max-w-3xl space-y-2 text-[1.05rem] leading-relaxed text-muted-foreground md:text-lg">
                  <p>週1回のAIレポートが粗利・キャッシュ・在庫の変動を数分で図解し、必要なデータをリアルタイムで経営陣に配信します。</p>
                  <p>単純作業の自動化により年間1,200時間の資料作成を削減した事例も。金融機関への説明資料と経営会議の準備時間を最大70%短縮し、意思決定の確度と速度を両立させます。</p>
                </div>
                <div className="flex flex-col gap-3 rounded-3xl border border-highlight/30 bg-highlight/10 px-6 py-5 text-highlight-foreground">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-highlight-foreground/80">実感できる成果</span>
                  <p className="text-[1.05rem] font-semibold leading-relaxed md:text-lg">
                    決断までの時間を50％削減。3ヶ月で利益とキャッシュが同時に増える仕組みをチームで並走構築します。
                  </p>
                </div>
                <div className="space-y-3 rounded-3xl border border-primary/20 bg-white/82 p-6 shadow-card">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">課題を3分で棚卸し</p>
                  <ul className="space-y-2">
                    {heroChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-left text-[1.05rem] leading-relaxed text-muted-foreground">
                        <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-highlight/20 text-[0.75rem] font-bold text-highlight-foreground">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-muted-foreground">
                    生成AIが御社の数字を整理し、意思決定に必要なレポートと施策案を10分で提示します。
                  </p>
                </div>
              </div>

              <div className="grid gap-3 rounded-3xl border border-primary/20 bg-white/95 p-6 shadow-card sm:grid-cols-3">
                {servicePillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex flex-col gap-2">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                      <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-3 rounded-3xl border border-primary/20 bg-white/95 p-6 shadow-card md:grid-cols-1">
                {heroSolutionHighlights.map((item) => (
                  <p
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-transparent px-4 py-4 text-[1.05rem] text-foreground transition-all duration-300 hover:border-highlight/50 hover:bg-highlight/10"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-highlight/20 text-[0.9rem] font-bold text-highlight-foreground transition-transform duration-300 group-hover:scale-110">
                      ✓
                    </span>
                    <span className="leading-relaxed text-left text-foreground/90">{item}</span>
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="cta"
                  size="lg"
                  className="group interactive-cta h-auto rounded-full px-10 py-5 text-[1.05rem]"
                  onClick={scrollToContact}
                  data-cta-id={PRIMARY_CTA.id}
                  data-cta-attention="hero-primary"
                  data-cta-attention-delay="420"
                  aria-label="30分の無料経営診断を予約する"
                >
                  <span className="flex items-center gap-2">
                    {PRIMARY_CTA.label}
                    <ArrowRight className="cta-arrow h-5 w-5" aria-hidden="true" />
                    <CheckCircle2 className="cta-check h-5 w-5" aria-hidden="true" />
                  </span>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-[0.95rem] text-muted-foreground">
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="call-now-button h-auto rounded-full px-8 py-4 text-[1.05rem] font-semibold shadow-card transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <a href="tel:092-231-2920" aria-label="電話で無料経営診断を予約">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    お電話で診断予約
                  </a>
                </Button>
                <span>平日9:00-18:00｜オンライン・訪問どちらも対応</span>
              </div>
              <div className="cta-reassurance-group text-muted-foreground/90">
                <span className="cta-reassurance">
                  <Timer aria-hidden="true" />
                  60秒で完了
                </span>
                <span className="cta-reassurance">
                  <JapaneseYen aria-hidden="true" />
                  月額18万円〜
                </span>
                <span className="cta-reassurance">
                  <ShieldCheck aria-hidden="true" />
                  初回30日間返金保証
                </span>
                <span className="cta-reassurance">
                  <Lock aria-hidden="true" />
                  秘密厳守（NDA対応）
                </span>
              </div>
              <button
                type="button"
                onClick={scrollToSimulator}
                className="floating-scroll-indicator group"
              >
                <span className="floating-scroll-indicator__icon" aria-hidden="true">
                  <ChevronDown className="h-5 w-5" />
                </span>
                <span className="floating-scroll-indicator__label">3分でAI診断を試す</span>
              </button>
              <p className="text-[0.95rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                初回相談は無料｜所要30分｜オンライン/訪問どちらも対応
              </p>

              <div className="grid gap-6 rounded-3xl border border-primary/15 bg-gradient-to-r from-white to-secondary/10 p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <AnimatedCounter
                      value={stat.value}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={stat.duration}
                      className="mx-auto inline-flex items-center justify-center rounded-2xl bg-primary/10 px-5 py-3 text-[2.05rem] font-black text-primary md:text-[2.7rem]"
                    />
                    <p className="mt-3 text-[0.95rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      {stat.label}
                    </p>
                    {stat.annotation && (
                      <p className="mt-1 text-[0.75rem] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                        {stat.annotation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-white shadow-elegant">
                <img
                  src={heroImage}
                  alt="AIと管理会計で中小企業の経営改善を支援する伴走型コンサルタント"
                  className="h-full max-h-[420px] w-full object-cover brightness-110"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-900/5 via-transparent to-white/60" aria-hidden="true" />
              </div>
              <div className="grid gap-4 rounded-3xl border border-primary/15 bg-white/90 p-6 shadow-card sm:grid-cols-3">
                {proofPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex flex-col gap-2">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="grid gap-4 rounded-3xl border border-sky-200/60 bg-sky-50/80 p-6 shadow-card sm:grid-cols-2">
                {aiVisualHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex flex-col gap-2 rounded-2xl bg-white/80 p-4 shadow-inner transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
