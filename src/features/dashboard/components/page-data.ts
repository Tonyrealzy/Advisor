import { TableResponse } from "@/models/response";

export const mockRecommendations: TableResponse[] = [
  {
    id: 1,
    status: "COMPLETED",
    data: {
      recommendations: [
        {
          ticker: "VOO",
          provider: "Vanguard",
          principal: 3000,
          composition: 30,
          expected_return: "8%",
          brief_description:
            "Tracks the performance of the S&P 500 Index, representing 500 of the largest U.S. companies. Offers broad exposure to the U.S. stock market, suitable for long-term growth.",
          financial_product: "Vanguard S&P 500 ETF",
          estimated_return_value: 240,
        },
        {
          ticker: "VXUS",
          provider: "Vanguard",
          principal: 2000,
          composition: 20,
          expected_return: "7%",
          brief_description:
            "Invests in stocks of companies located outside the United States, providing diversified exposure to developed and emerging international markets to reduce country-specific risk.",
          financial_product: "Vanguard Total International Stock ETF",
          estimated_return_value: 140,
        },
        {
          ticker: "BND",
          provider: "Vanguard",
          principal: 2000,
          composition: 20,
          expected_return: "3%",
          brief_description:
            "Seeks to track the performance of a broad, market-weighted bond index. Provides diversified exposure to the U.S. investment-grade bond market for stability and income.",
          financial_product: "Vanguard Total Bond Market ETF",
          estimated_return_value: 60,
        },
        {
          ticker: "VIG",
          provider: "Vanguard",
          principal: 2000,
          composition: 20,
          expected_return: "7%",
          brief_description:
            "Invests in U.S. companies that have a history of increasing dividends over time. Focuses on quality companies with stable earnings, potentially offering less volatility.",
          financial_product: "Vanguard Dividend Appreciation ETF",
          estimated_return_value: 140,
        },
        {
          ticker: "VNQ",
          provider: "Vanguard",
          principal: 1000,
          composition: 10,
          expected_return: "6%",
          brief_description:
            "Invests in real estate investment trusts (REITs) that hold properties across various sectors. Offers exposure to the real estate market for diversification and income.",
          financial_product: "Vanguard Real Estate ETF",
          estimated_return_value: 60,
        },
      ],
    },
    createdAt: "2026-03-02T17:33:17.361Z",
  },
  {
    id: 2,
    status: "COMPLETED",
    data: {
      recommendations: [
        {
          ticker: "SPY",
          provider: "State Street",
          principal: 2500,
          composition: 25,
          expected_return: "7.5%",
          brief_description:
            "Tracks the S&P 500 Index, providing exposure to large-cap U.S. equities. Suitable for investors seeking broad market exposure.",
          financial_product: "SPDR S&P 500 ETF Trust",
          estimated_return_value: 188,
        },
        {
          ticker: "EFA",
          provider: "iShares",
          principal: 2000,
          composition: 20,
          expected_return: "6.5%",
          brief_description:
            "Provides access to large- and mid-cap companies in developed markets outside the U.S. and Canada.",
          financial_product: "iShares MSCI EAFE ETF",
          estimated_return_value: 130,
        },
        {
          ticker: "AGG",
          provider: "iShares",
          principal: 2000,
          composition: 20,
          expected_return: "3.2%",
          brief_description:
            "Tracks the total U.S. investment-grade bond market, offering diversification and income.",
          financial_product: "iShares Core U.S. Aggregate Bond ETF",
          estimated_return_value: 64,
        },
        {
          ticker: "SCHD",
          provider: "Schwab",
          principal: 2000,
          composition: 20,
          expected_return: "6.8%",
          brief_description:
            "Focuses on high dividend yielding U.S. stocks with a record of consistently paying dividends.",
          financial_product: "Schwab U.S. Dividend Equity ETF",
          estimated_return_value: 136,
        },
        {
          ticker: "VNQI",
          provider: "Vanguard",
          principal: 1000,
          composition: 10,
          expected_return: "5.5%",
          brief_description:
            "Invests in international real estate investment trusts, providing global property exposure.",
          financial_product: "Vanguard Global ex-U.S. Real Estate ETF",
          estimated_return_value: 55,
        },
      ],
    },
    createdAt: "2026-03-01T14:12:05.000Z",
  },
  {
    id: 3,
    status: "COMPLETED",
    data: {
      recommendations: [
        {
          ticker: "QQQ",
          provider: "Invesco",
          principal: 3500,
          composition: 35,
          expected_return: "9%",
          brief_description:
            "Tracks the Nasdaq-100 Index, providing exposure to the largest non-financial companies listed on Nasdaq.",
          financial_product: "Invesco QQQ Trust",
          estimated_return_value: 315,
        },
        {
          ticker: "VEA",
          provider: "Vanguard",
          principal: 1500,
          composition: 15,
          expected_return: "6%",
          brief_description:
            "Provides exposure to stocks in developed markets outside of the U.S. and Canada.",
          financial_product: "Vanguard FTSE Developed Markets ETF",
          estimated_return_value: 90,
        },
        {
          ticker: "LQD",
          provider: "iShares",
          principal: 2000,
          composition: 20,
          expected_return: "4%",
          brief_description:
            "Tracks the investment-grade corporate bond market, offering higher yields than government bonds.",
          financial_product:
            "iShares iBoxx $ Investment Grade Corporate Bond ETF",
          estimated_return_value: 80,
        },
        {
          ticker: "DVY",
          provider: "iShares",
          principal: 2000,
          composition: 20,
          expected_return: "6.2%",
          brief_description:
            "Focuses on high dividend yielding U.S. companies, providing income and potential growth.",
          financial_product: "iShares Select Dividend ETF",
          estimated_return_value: 124,
        },
        {
          ticker: "REM",
          provider: "iShares",
          principal: 1000,
          composition: 10,
          expected_return: "5.8%",
          brief_description:
            "Invests in U.S. real estate companies and REITs, offering exposure to the real estate sector.",
          financial_product: "iShares Mortgage Real Estate ETF",
          estimated_return_value: 58,
        },
      ],
    },
    createdAt: "2026-02-28T09:45:30.000Z",
  },
];
