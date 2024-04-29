'use client'
import {Slash} from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb"
import {Tabs, TabsContent, TabsTrigger, TabsList } from "@/src/components/ui/tabs"
import {Skeleton} from "@/src/components/ui/skeleton";
import {useUserStore} from "@/src/stores/user.store";
import {useEffect} from "react";
import {GeneralInfo} from "@/src/components/shared/UserAccount/GeneralInfo/GeneralInfo";
import {Booking} from "@/src/components/shared/UserAccount/Booking/Booking";
import {FlightHistory} from "@/src/components/shared/UserAccount/FlightHistory/FlightHistory";
import {useTranslations} from "next-intl";
export default function Profile() {
  const { fetchUser, isLoading, user} = useUserStore()
  const t = useTranslations('userProfile')
  const access = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBdmlvbml4Iiwic3ViIjoiQUNDRVNTX1RPS0VOIiwidXNlcm5hbWUiOiIyMDA0LjAxMDM1QG1hbmFzLmVkdS5rZyIsImF1dGhvcml0aWVzIjoiUk9MRV9DTElFTlQiLCJpYXQiOjE3MTQ0MDkxNzIsImV4cCI6MTcxNDQxMjc3Mn0.yg0stjP2RIQ0QXR4yy-el-LPuL14BNgiVlqrVhF5Q4A'
  useEffect(() => {
    fetchUser(access)
  }, []);

  if(isLoading) {
    return <Skeleton className='h-10 w-60'></Skeleton>
  }

  if(user) {
    return (
        <div>
          <div className={`my-4`}>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">{t('breadCamp.home')}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash/>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>{t('breadCamp.account')}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className={`w-full`}>
            <Tabs defaultValue="g-info" className="w-full">
              <TabsList className="grid max-w-[500px] grid-cols-3">
                <TabsTrigger value="g-info">{t('nav.generalInfo')}</TabsTrigger>
                <TabsTrigger value="booking">{t('nav.booking')}</TabsTrigger>
                <TabsTrigger value="flights">{t('nav.flightHistory')}</TabsTrigger>
              </TabsList>
              <TabsContent value="g-info" className={`w-full`}>
                <GeneralInfo/>
              </TabsContent>
              <TabsContent value="booking">
                <Booking/>
              </TabsContent>
              <TabsContent value="flights">
                <FlightHistory/>
              </TabsContent>
            </Tabs>
          </div>
        </div>
    )
  }
}
