import DFWAreasStrip from '@/components/services/DFWAreasStrip'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesInquiryCTA from '@/components/services/ServicesInquiryCTA'
import React from 'react'

function page() {
  return (
    <>
    <ServicesHero/>
    <ServicesGrid/>
    <ServiceProcess/>
    <DFWAreasStrip/>
    <ServicesInquiryCTA/>
    </>
  )
}

export default page