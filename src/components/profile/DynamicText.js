import React, { useState, useEffect } from 'react';
import './profile.css';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const phrases = ['Student', 'Web Developer', 'Software Developer'];
  const typingSpeed = 100; 
  const erasingSpeed = 100; 
  const pauseBetweenPhrases = 500; 
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer;
    if (typing) {
      timer = setTimeout(() => {
        setText((prev) => phrases[phraseIndex].substring(0, prev.length + 1));
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => phrases[phraseIndex].substring(0, prev.length - 1));
      }, erasingSpeed);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line  
  }, [text, typing, phraseIndex]);
  useEffect(() => {
    if (!typing && text === '') {
      const nextPhraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(() => {
        setPhraseIndex(nextPhraseIndex);
        setTyping(true);
      }, pauseBetweenPhrases);
    } else if (text === phrases[phraseIndex]) {
      setTyping(false);
    }
    // eslint-disable-next-line
  }, [text, phraseIndex, phrases]);
  return (
    <div className="dynamictext" style={{fontSize:"32px"}}><span>I am a</span> <span>{text}!</span></div>
  );
};

export default TypingEffect;
