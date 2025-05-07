export default function TrudeSpeechButton({ text }) {
  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sprachausgabe wird von deinem Browser nicht unterstützt.");
    }
  };

  return (
    <button
      onClick={speak}
      className="mt-2 text-sm bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700"
    >
      🔊 Trude spricht
    </button>
  );
}
