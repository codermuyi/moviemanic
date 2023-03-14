import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components'

const NavLink = ({ href, children, className }: any) => {
  const [ariaCurrent, setAriaCurrent] = useState<'page' | undefined>()
  const { asPath } = useRouter()

  console.log(asPath)

  useEffect(() => {
    const ariaCurrent = href === decodeURIComponent(asPath) ? "page" : undefined

    setAriaCurrent(ariaCurrent)
  }, [asPath, href]);

  return (
    <Link href={href} legacyBehavior>
      <MyLink href={href} className={className} aria-current={ariaCurrent}>{children}</MyLink>
    </Link>
  );
};

const MyLink = styled.a`
  cursor: pointer;

  &[aria-current] {
    color: rgb(186,79,58);

    :hover {
      color: rgb(186,79,58) !important;
    }
  }
`

export default NavLink;