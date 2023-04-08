import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useState } from "react";

import arrow from '@/assets/icons/arrow_upward.svg'
import Button from './Button'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Simp>
      {showButton && (
        <Button onClick={scrollToTop}>
          <Image src={arrow} alt='arrow-upward' width={20} height={20} />
        </Button>
      )}
    </Simp>
  );
};

const Simp = styled.div`
  .button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    padding: 1rem;
    z-index: 1000;
    box-shadow: 0 3px 3px rgb(0 0 0 / .5);
  }
`

export default ScrollToTopButton