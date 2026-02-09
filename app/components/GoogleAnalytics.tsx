// Google Analytics 4 placeholder
// Replace GA_MEASUREMENT_ID with your actual GA4 ID
// Uncomment the script tags below when ready

export default function GoogleAnalytics() {
  return null;
  // return (
  //   <>
  //     <Script
  //       strategy="afterInteractive"
  //       src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  //     />
  //     <Script id="google-analytics" strategy="afterInteractive">
  //       {`
  //         window.dataLayer = window.dataLayer || [];
  //         function gtag(){dataLayer.push(arguments);}
  //         gtag('js', new Date());
  //         gtag('config', 'GA_MEASUREMENT_ID');
  //       `}
  //     </Script>
  //   </>
  // );
}
