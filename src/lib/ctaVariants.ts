export type CtaVariant = {
  id: string;
  label: string;
  description: string;
  supportText: string;
  href: string;
  analyticsEvent?: string;
};

const CTA_ANCHOR = "#cta-section";

export const PRIMARY_CTA: CtaVariant = {
  id: "consultation",
  label: "無料経営診断を予約する",
  description: "30分でAIレポートのデモと財務ヒアリングを実施します",
  supportText: "最短当日で候補日時をご案内します",
  href: CTA_ANCHOR,
  analyticsEvent: "cta_primary_click",
};

export const SECONDARY_CTA: CtaVariant = {
  id: "checklist",
  label: "AI活用チェックリストを受け取る",
  description: "資料とExcelテンプレートをメールで即時送付します",
  supportText: "資料は送信後すぐにダウンロードできます",
  href: CTA_ANCHOR,
  analyticsEvent: "cta_secondary_click",
};

export const CTA_TARGET = CTA_ANCHOR;
