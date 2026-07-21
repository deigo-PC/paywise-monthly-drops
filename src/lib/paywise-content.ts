import c1s0 from "@/assets/paywise/carousels/c1/slide-0.png";
import c1s1 from "@/assets/paywise/carousels/c1/slide-1.png";

import c2s0 from "@/assets/paywise/carousels/c2/slide-0.png";
import c2s1 from "@/assets/paywise/carousels/c2/slide-1.png";
import c2s2 from "@/assets/paywise/carousels/c2/slide-2.png";

import c3s0 from "@/assets/paywise/carousels/c3/slide-0.png";
import c3s1 from "@/assets/paywise/carousels/c3/slide-1.png";
import c3s2 from "@/assets/paywise/carousels/c3/slide-2.png";

import c4s0 from "@/assets/paywise/carousels/c4/slide-0.png";
import c4s1 from "@/assets/paywise/carousels/c4/slide-1.png";
import c4s2 from "@/assets/paywise/carousels/c4/slide-2.png";

import c5s0 from "@/assets/paywise/carousels/c5/slide-0.png";
import c5s1 from "@/assets/paywise/carousels/c5/slide-1.png";
import c5s2 from "@/assets/paywise/carousels/c5/slide-2.png";

import c6s0 from "@/assets/paywise/carousels/c6/slide-0.png";
import c6s1 from "@/assets/paywise/carousels/c6/slide-1.png";
import c6s2 from "@/assets/paywise/carousels/c6/slide-2.png";
import c6s3 from "@/assets/paywise/carousels/c6/slide-3.png";

import c7s0 from "@/assets/paywise/carousels/c7/slide-0.png";
import c7s1 from "@/assets/paywise/carousels/c7/slide-1.png";
import c7s2 from "@/assets/paywise/carousels/c7/slide-2.png";
import c7s3 from "@/assets/paywise/carousels/c7/slide-3.png";

import blog1Banner from "@/assets/paywise/blogs/blog1-banner.png";
import blog1Story from "@/assets/paywise/blogs/blog1-story.png";
import blog2Banner from "@/assets/paywise/blogs/blog2-banner.png";
import blog2Story from "@/assets/paywise/blogs/blog2-story.png";
import blog3Banner from "@/assets/paywise/blogs/blog3-banner.png";
import blog3Story from "@/assets/paywise/blogs/blog3-story.png";

import nl1Banner from "@/assets/paywise/newsletters/newsletter.1.png";
import nl2Banner from "@/assets/paywise/newsletters/newsletter.2.png";
import nl3Banner from "@/assets/paywise/newsletters/newsletter.3.png";
import email1Story from "@/assets/paywise/newsletters/email1-story.png";
import email2Story from "@/assets/paywise/newsletters/email2-story.png";
import email3Story from "@/assets/paywise/newsletters/email3-story.png";

import single1 from "@/assets/paywise/singles/single-1.png";
import single2 from "@/assets/paywise/singles/single-2.png";
import single2Story from "@/assets/paywise/singles/single-2-story.png";
import single3 from "@/assets/paywise/singles/single-3.png";
import single4 from "@/assets/paywise/singles/single-4.png";

export type CarouselItem = {
  id: number;
  title: string;
  caption?: string;
  slides: string[];
};

export type BlogItem = {
  id: number;
  title: string;
  preview: string;
  banner: string;
  story: string;
  docUrl: string;
};

export type NewsletterItem = {
  id: number;
  title: string;
  preview: string;
  banner: string;
  story: string;
  docUrl: string;
  body: string;
  ctaUrl: string;
  ctaText: string;
};

export type StandaloneItem = {
  id: number;
  title: string;
  image: string;
  story?: string;
  caption?: string;
};

export const carousels: CarouselItem[] = [
  {
    id: 1,
    title: "Island Finance — Now on PayWise",
    caption: "Big news 🇹🇹 You can now pay your Island Finance loan directly on PayWise. No branch. No queue. No running around. Open the app, select Island Finance, and pay in 30 seconds. Licensed by the Central Bank of T&T.",
    slides: [c1s0, c1s1],
  },
  {
    id: 2,
    title: "Still Standing in Payment Lines in 2026?",
    caption: "It's 2026. You have a smartphone. You have the PayWise app. Why are you still standing in payment lines? T&TEC, WASA, Flow, Island Finance — all of them take 30 seconds from your phone. Licensed by the Central Bank of T&T. Your Saturday > payment line.",
    slides: [c2s0, c2s1, c2s2],
  },
  {
    id: 3,
    title: "One App for All Your Bills",
    caption: "T&TEC. WASA. Flow. Digicel. Island Finance. How many of these do you pay every month? And how many different places do you go to pay them? PayWise puts them all in one app. 30 seconds per bill. One receipt. Licensed by the Central Bank of T&T.",
    slides: [c3s0, c3s1, c3s2],
  },
  {
    id: 4,
    title: "\"You Take Card?\" — Now You Do",
    caption: "\"You take card?\" If you're a business owner in Trinidad, you've heard this question. And every time you say no, a sale walks out. PayWise for Business fixes that. No POS machine. No bank contract. No minimum. Your customer scans your QR code. You get paid. Money in your bank account next business day.",
    slides: [c4s0, c4s1, c4s2],
  },
  {
    id: 5,
    title: "Real People. Real Bills. Real Easy.",
    caption: "Real people, real bills, real easy. Marissa pays her T&TEC in 30 seconds. Derek accepts card payments at his shop. Keisha pays her Island Finance loan from her phone. Thousands of Trinidadians are already using PayWise. Licensed by the Central Bank of T&T.",
    slides: [c5s0, c5s1, c5s2],
  },
  {
    id: 6,
    title: "Mid-Year Bill Reset — Stop Paying to Pay Your Bills",
    caption: "Mid-year is the perfect time to check yourself. How much did you spend last month just paying your bills? Bank fees, bus fare, data. With PayWise, you pay your T&TEC in 30 seconds. No queue. No more waiting. Licensed by the Central Bank of T&T.",
    slides: [c6s0, c6s1, c6s2, c6s3],
  },
  {
    id: 7,
    title: "You Left Home to Pay a Bill?",
    caption: "You left home. To pay a bill. In 2026. Let that sink in. PayWise takes 30 seconds. T&TEC. WASA. Flow. Digicel. All of them. Licensed by the Central Bank of T&T. Your Money, Your Way.",
    slides: [c7s0, c7s1, c7s2, c7s3],
  },
];

export const blogs: BlogItem[] = [
  {
    id: 1,
    title: "You Can Now Pay Your Island Finance Loan on PayWise — Here's How",
    preview: "If you have an Island Finance loan, you know the routine — heading to a branch, standing in a payment line, or finding an agent to process the payment. That routine just changed. PayWise now accepts Island Finance payments directly in the app: 30 seconds, from your phone, anywhere in Trinidad.",
    banner: blog1Banner,
    story: blog1Story,
    docUrl: "/blog-posts.html#post-1",
  },
  {
    id: 2,
    title: "How Many Bills Are You Still Paying the Hard Way? Here's the Easier Way.",
    preview: "Think about the last time you paid a bill. Did you leave your house? Stand in a line? Pay cash and hope the receipt didn't get lost? There's a reason PayWise exists: paying bills in Trinidad should not be harder than buying a doubles.",
    banner: blog2Banner,
    story: blog2Story,
    docUrl: "/blog-posts.html#post-2",
  },
  {
    id: 3,
    title: "What It Means That PayWise Is Licensed by the Central Bank of Trinidad and Tobago",
    preview: "You hear it in every PayWise ad: \"Licensed by the Central Bank of Trinidad and Tobago.\" But what does that actually mean for you and your money? It's not just a trust badge — it's a legal and regulatory framework that protects every transaction you make.",
    banner: blog3Banner,
    story: blog3Story,
    docUrl: "/blog-posts.html#post-3",
  },
];

export const newsletters: NewsletterItem[] = [
  {
    id: 1,
    title: "Two big updates: Island Finance & Cash-Out now live",
    preview: "Pay your loan AND get cash from your wallet. All in one app.",
    banner: nl1Banner,
    story: email1Story,
    docUrl: "#",
    body: `Hi [First Name],

Big month for PayWise. Two things you need to know:

**1. Island Finance is now on PayWise**
You can pay your Island Finance loan directly from the app. Open PayWise → Select Island Finance → Enter your details → Confirm. 30 seconds. No branch. Licensed by the Central Bank of T&T.

**2. Cash-Out is live**
Need physical cash? Withdraw money from your PayWise wallet at any PayWise agent location. Show your QR code, get your cash. No ATM fee. No minimum.

Pay your bills. Withdraw your cash. Manage everything from one app.

Your Money, Your Way.`,
    ctaUrl: "https://paywise.co/personal/",
    ctaText: "Download PayWise",
  },
  {
    id: 2,
    title: "Start accepting card payments today — no POS machine needed",
    preview: "Your customers are asking. Here's how to say yes.",
    banner: nl2Banner,
    story: email2Story,
    docUrl: "#",
    body: `Hi [First Name],

A customer walks into your shop. They pick up what they want. Then comes the question: "Do you take card?"

If you've ever had to say no, you know the feeling. The sale you worked for — walking out the door.

PayWise for Business changes that. Here's how simple it is:

1. Download PayWise for Business
2. Generate your QR code
3. Customer scans and pays with their card
4. Money hits your bank account next business day

No POS machine. No bank contract. No minimum spend. Just more sales.`,
    ctaUrl: "https://paywise.co/business",
    ctaText: "Enable card payments today",
  },
  {
    id: 3,
    title: "August check-in — here's everything new on PayWise",
    preview: "Island Finance, Cash-Out, and more. Your monthly update.",
    banner: nl3Banner,
    story: email3Story,
    docUrl: "#",
    body: `Hi [First Name],

August was packed. Here's what happened on PayWise:

📌 Island Finance — Now Accepted
Pay your Island Finance loan directly in the app. 30 seconds. No branch. Just another biller added to your one-stop payment hub.

💵 Cash-Out — Live Now
Need physical cash? Withdraw from your PayWise wallet at any agent location. Walk in, show your QR, walk out with cash.

✅ Every Bill, One App
T&TEC, WASA, Flow, Digicel, Island Finance, and more. One login. One wallet. 30 seconds per bill.

September is going to be even bigger. If you haven't downloaded PayWise yet, now's the time.

Your Money, Your Way.`,
    ctaUrl: "https://paywise.co/personal/",
    ctaText: "Download PayWise",
  },
];

export const standalone: StandaloneItem[] = [
  {
    id: 1,
    title: "Standalone Post 1",
    image: single1,
    story: undefined,
  },
  {
    id: 2,
    title: "Standalone Post 2",
    image: single2,
    story: single2Story,
  },
  {
    id: 3,
    title: "Standalone Post 3",
    image: single3,
    story: undefined,
  },
  {
    id: 4,
    title: "Standalone Post 4",
    image: single4,
    story: undefined,
  },
];

export const meta = {
  client: "PayWise",
  period: "July 21 – August 31, 2026",
  preparedBy: "Content Preview",
};
