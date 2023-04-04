import styled from 'styled-components'
import { useState, useEffect, ReactNode } from 'react'
import { DropdownIcon } from '@atoms/SVGIcons'

const SidebarDropdown = ({
  name,
  toggleElementContent,
  isSidebarOpen,
  children,
  dataID = ''
}: any) => {
  const [isDropdownOpen, openDropdown] = useState(false)

  useEffect(() => {
    if (dataID === 'open-by-default') {
      openDropdown(true)
    }
    if (isSidebarOpen === false)
      openDropdown(false)
  }, [isSidebarOpen, dataID])

  function toggleDropdown() {
    openDropdown(prevDropdown => !prevDropdown)
  }

  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      toggleDropdown()
    }
    if (e.keyCode === 9) {
      openDropdown(true)
    }
    if (e.shiftKey && e.keyCode === 9)
      openDropdown(false)
  }

  return (
    <Dropdown isOpen={isDropdownOpen} name={name}>
      <div
        className='nav-item dropdown-toggle'
        onClick={toggleDropdown}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div>
          {toggleElementContent}
        </div>
        <DropdownIcon className={`${name}-dropdown-icon`} />
      </div>
      <div className='dropdown-body'>
        {children?.map((child: ReactNode, i: number) =>
          <div key={i} className='dropdown-item'>
            {child}
          </div>
        )}
      </div>
    </Dropdown>
  )
}

const Dropdown = styled.div.attrs(props => {
})`
  .dropdown-toggle {
    justify-content: space-between;

    & > div {
      display: flex;
      gap: 1rem;
    }
  }

  /* Different name for each dropdown to allow different behaviour of icon */
  .${p => p.name}-dropdown-icon {
    width: 14px;
    height: 14px;
    transition: .2s;
    transform: ${p => p.isOpen ? 'none' : 'rotate(-90deg)'};
  }
  
  .dropdown-body {
    overflow: hidden;
    max-height: ${props => props.isOpen ? 'auto' : '0'};
    border-left: 2px dashed rgb(var(--f-text-color), .9);
    background-image: url("data:image/svg+xml,%3csvg width='3%' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='6%2c 21%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-right: 0;
    margin-left: 5px;
    transition: border-color .3s;

    :hover {
      border-left-color: rgba(var(--sub-theme-color));
    }
  }

  .dropdown-item {
    background-color: rgb(var(--f-bg-color), .95);
    padding: .3rem 1.3rem;

  }
  
  .dropdown-item:not(:last-child) {
    border-bottom: 2px solid rgb(var(--f-bg-color));
  }
`


export default SidebarDropdown
