'use client'
import React from 'react'
import { HeaderContainer } from './styles'
import { Divider } from './common/Divider'
import { PersonalInfo } from './common/PersonalInfo'
import { Links } from './common/Links'
export const Header = () => {
  return (
    <HeaderContainer>
      <PersonalInfo />
      <Links />
      <Divider />
    </HeaderContainer>
  )
}
