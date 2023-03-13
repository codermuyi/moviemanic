import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components'

const NavLink = ({ href, children }: any) => {
  const [ariaCurrent, setAriaCurrent] = useState<'page' | undefined>()
  const { asPath } = useRouter()

  useEffect(() => {
    const ariaCurrent = href === asPath ? "page" : undefined

    setAriaCurrent(ariaCurrent)
  }, [asPath, href]);

  return (
    <Link href={href} legacyBehavior>
      <MyLink aria-current={ariaCurrent}>{children}</MyLink>
    </Link>
  );
};

const MyLink = styled.a`
  &[aria-current] {
    color: rgb(186,79,58);
  }
`

export default NavLink;