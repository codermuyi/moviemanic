import Image from 'next/image'
import styled from 'styled-components'

import { FilmDetailsType, Company } from '@/src/types'

const FilmCompanies = ({ info }: { info?: FilmDetailsType }) => {
  return (
    <>
      {(info?.production_companies || info?.networks) && (
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {info?.networks?.map(
            (network) =>
              network.logo_path && (
                <CompanyLogo key={network.id} network={network} />
              ),
          )}
          {info?.production_companies?.map(
            (network) =>
              network.logo_path && (
                <CompanyLogo key={network.id} network={network} />
              ),
          )}
        </div>
      )}
    </>
  )
}

const CompanyLogo = styled(Image).attrs((p: { network: Company }) => ({
  network: p.network,
  src: `https://image.tmdb.org/t/p/w1280${p.network.logo_path}`,
  width: 50,
  height: 30,
  alt: p.network.name,
}))`
  object-fit: cover;
  width: auto;
`

export default FilmCompanies
