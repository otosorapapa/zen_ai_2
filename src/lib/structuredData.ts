export const structuredDataList = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社創和経営コンサルティング",
    url: "https://furumachi-smec.lognowa.com/public/lp",
    logo: "https://furumachi-smec.lognowa.com/public/lp/og-image.svg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+81-92-231-2920",
        contactType: "customer service",
        areaServed: "JP",
        availableLanguage: ["Japanese"]
      }
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=100057650513516",
      "https://www.linkedin.com/company/soh-consulting"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AI経営顧問・管理会計伴走サービス",
    url: "https://furumachi-smec.lognowa.com/public/lp",
    areaServed: ["Fukuoka", "Kyushu", "Japan"],
    provider: {
      "@type": "Organization",
      name: "株式会社創和経営コンサルティング"
    },
    description:
      "福岡・九州の中小企業向けに生成AIと管理会計を活用した経営顧問サービスを提供し、粗利と資金繰りの改善を伴走支援します。",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI経営顧問プログラム",
      itemListElement: [
        {
          "@type": "Offer",
          name: "無料経営診断・生成AIレポート体験",
          price: "0",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: "https://furumachi-smec.lognowa.com/public/lp#cta-section"
        },
        {
          "@type": "Offer",
          name: "伴走型AI導入・管理会計整備",
          price: "180000",
          priceCurrency: "JPY",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "180000",
            priceCurrency: "JPY",
            billingDuration: "P1M"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "生成AI×管理会計による経営改善プログラム",
    serviceType: "AI経営顧問",
    provider: {
      "@type": "Organization",
      name: "株式会社創和経営コンサルティング",
      telephone: "+81-92-231-2920"
    },
    description:
      "週1回のAIレポートで意思決定を高速化し、粗利とキャッシュフローを同時改善する伴走型サービスです。",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
      url: "https://furumachi-smec.lognowa.com/public/lp#cta-section",
      availability: "https://schema.org/PreOrder"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "料金や契約期間は？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "月額18万円〜（税別）で初回契約は3ヶ月から。1ヶ月目で棚卸しとロードマップ策定、2〜3ヶ月目でAIレポートと管理会計の運用を定着させます。"
        }
      },
      {
        "@type": "Question",
        name: "どの規模・業種が対象ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "年商5000万円〜15億円、従業員10〜100名規模の製造・建設・卸売・サービス・D2Cなど、現場の属人化と資金繰り課題を抱える企業が中心です。"
        }
      },
      {
        "@type": "Question",
        name: "成果が出るまでのステップは？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "初月でデータ整備とヒアリングを完了し、2ヶ月目から週次でAIレポートを運用。3ヶ月目には粗利とキャッシュフロー改善施策の実行段階に入ります。"
        }
      },
      {
        "@type": "Question",
        name: "AIやデータに詳しくなくても大丈夫ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "操作マニュアルやトレーニング動画、初月2回のワークショップを提供し、生成AIや予測モデルは業務フローに合わせてカスタマイズするため専門知識は不要です。"
        }
      }
    ]
  }
];
