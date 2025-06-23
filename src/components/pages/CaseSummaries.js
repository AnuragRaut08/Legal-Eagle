import React, { useState } from "react";

const CaseSummaries = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // Tracks selected category

  // Case summaries categorized by type
  const caseSummaries = {
    all: [
      {
        id: 1,
        title: "Case 1: Copyright Infringement",
      },
      {
        id: 2,
        title: "Case 2: मालमत्ता वाद (Property Dispute)",
      },
      {
        id: 3,
        title: "Case 3: अनुबंध का उल्लंघन (Breach of Contract)",
      },
    ],
    copyright: [
      {
        id: 1,
        title: "Case 1: Copyright Infringement",
        summary:
          'The plaintiff, Ramesh Gupta, a renowned author from Bengaluru, alleges that the defendant, Creative Minds Publishing Pvt. Ltd., based in Mumbai, has unlawfully reproduced and distributed significant portions of his original book titled "Shadows of Time" without his consent. ' +
          'The plaintiff published "Shadows of Time" on March 15, 2022, and holds valid copyright protection under the Copyright Act, 1957. The defendant, however, has incorporated entire chapters and distinctive illustrations from the plaintiff\'s book into their own publication titled "Echoes of Eternity", released on January 10, 2023. ' +
          'The plaintiff claims to have sent a cease-and-desist notice to the defendant on March 1, 2023, but the defendant failed to respond and continues to distribute the infringing material.',
      },
    ],
    property: [
      {
        id: 2,
        title: "Case 2: मालमत्ता वाद (Property Dispute)",
        summary:
          "फिर्यादी सुमन तायडे, पुणे येथील निवासी व समाजसेविका, यांनी प्रतिवादी लक्ष्मी सहकारी गृहनिर्माण संस्था विरुद्ध मालमत्तेच्या हक्कावरून दावा केला आहे. फिर्यादींच्या मते, त्यांनी २०२० पासून सदनिकेच्या भाड्यासाठी नियमितपणे रक्कम भरली आहे, परंतु सहकारी गृहनिर्माण संस्था ही सदनिकेचा मालकी हक्क त्यांच्या नावावर हस्तांतर करण्यास नकार देत आहे.\n" +
          "सुमन तायडे यांनी २०१५ साली ही सदनिका संस्थेमार्फत लॉटरी प्रणालीद्वारे प्राप्त केली होती. त्यांनी ५ वर्षांपर्यंत नियमीतपणे भाडे भरले असून तसे सर्व रेकॉर्ड्स व बँक ट्रांजेक्शन स्लीप्स न्यायालयासमोर सादर केले आहेत. त्यानंतर, २०२१ मध्ये सदनिकेचा मालकी हक्क त्यांच्या नावावर करण्याचा करार झाला होता, परंतु प्रतिवादी संस्था बेकायदेशीररित्या हा करार पूर्ण करण्यास टाळाटाळ करत आहे.\n" +
          "याशिवाय, फिर्यादींनी असा दावा केला आहे की, संस्थेच्या अधिकाऱ्यांनी त्यांना काही वेळा धमकावले आहे की सदनिकेचा हक्क संस्थेच्या इतर सभासदांना हस्तांतरित केला जाईल. या कारणामुळे सुमन तायडे यांना मानसिक त्रास सहन करावा लागला आहे. फिर्यादींच्या वकिलांनी २०२२ साली प्रतिवादींना एक कायदेशीर नोटीस पाठवली होती, परंतु त्यास कोणताही प्रतिसाद मिळाला नाही.",
      },
    ],
    contract: [
      {
        id: 3,
        title: "Case 3: अनुबंध का उल्लंघन (Breach of Contract)",
        summary:
          "फरियादी अल्बर्ट फर्नांडिस, जो कि एक छोटे व्यवसाय के मालिक हैं और मुंबई के निवासी हैं, ने मुंबई नगर निगम (बीएमसी) पर उनके अनुबंध की शर्तों का उल्लंघन करने का आरोप लगाया है।\n" +
          "फरियादी और प्रतिवादी के बीच 15 जून 2022 को एक अनुबंध हुआ था। इस अनुबंध के तहत, बीएमसी को 100 मशीनों की डिलीवरी 60 दिनों के भीतर करनी थी, जो कि नगरपालिका निर्माण परियोजनाओं के लिए आवश्यक थीं। फरियादी का दावा है कि बीएमसी ने निर्धारित समय सीमा तक केवल 70 मशीनों की डिलीवरी की और शेष 30 मशीनों के लिए अग्रिम भुगतान की गई राशि को वापस करने में विफल रहा।\n" +
          "फरियादी का कहना है कि अनुबंध के अनुसार, उन्हें समय पर डिलीवरी न मिलने के कारण उनके निर्माण प्रोजेक्ट्स में गंभीर देरी हुई, जिससे उनकी प्रतिष्ठा और आय दोनों को नुकसान हुआ। फरियादी ने कई बार प्रतिवादी को लिखित में संपर्क किया और डिलीवरी के मुद्दे को सुलझाने का अनुरोध किया, लेकिन बीएमसी ने न तो शेष सामान दिया और न ही धनवापसी की।\n" +
          "फरियादी का यह भी दावा है कि अनुबंध का पालन न करने के अलावा, प्रतिवादी ने उनकी परियोजनाओं में बाधा उत्पन्न की, जिससे उन्हें अन्य व्यवसायिक अवसरों का भी नुकसान हुआ।",
      },
    ],
  };

  // Filter summaries based on selected category
  const displayedSummaries =
    selectedCategory && selectedCategory !== "all"
      ? caseSummaries[selectedCategory]
      : caseSummaries.all;

  return (
    <div className="case-summaries-container">
      <h1>Case Summaries</h1>

      {/* Dropdown for selecting category */}
      <div className="case-category-selector">
        <label htmlFor="case-category">Filter by Category:</label>
        <select
          id="case-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="case-category-dropdown"
        >
          <option value="all">All Cases</option>
          <option value="copyright">Copyright Infringement</option>
          <option value="property">Property Dispute</option>
          <option value="contract">Breach of Contract</option>
        </select>
      </div>

      {/* Display filtered summaries */}
      <ul>
        {displayedSummaries.map((caseItem) => (
          <li key={caseItem.id} className="case-item">
            <h2>{caseItem.title}</h2>
            <p>{caseItem.summary}</p>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .case-summaries-container {
          padding: 20px;
          background-color: #f9f9f9;
          font-family: Arial, sans-serif;
        }

        .case-summaries-container h1 {
          text-align: center;
          font-size: 32px;
          color: #333;
        }

        .case-category-selector {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 16px;
        }

        .case-category-dropdown {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #fff;
        }

        .case-item {
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          padding: 20px;
          transition: box-shadow 0.3s ease;
        }

        .case-item:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .case-item h2 {
          color: #0073e6;
          font-size: 24px;
          margin-bottom: 15px;
        }

        .case-item p {
          color: #555;
          font-size: 16px;
          line-height: 1.6;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};

export default CaseSummaries;
