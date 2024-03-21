'use client'

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {  useEffect, useState} from "react";
import { updateAccount } from "@/public/utils/updateAccount";
import { userAccountTypes } from "@/public/types/userAccountTypes";

export default function Home() {

  const router = useRouter()
  const [userAccount, setUserAccount] = useState<userAccountTypes>(null)
  useEffect(() => {
    if(userAccount) {
      router.push('/Wallet')
      console.log(userAccount)
    }
  }, [userAccount])

  const onConnection = () => {
      if (typeof window.ethereum) {
        updateAccount(setUserAccount)
      }else{
        alert('Установите расширение MetaMask для вашего браузера!')
      }
  }

  return (
   <>
   <Box sx={{
    m: 'auto',
    mt: '15%',
    width: 600, 
    height: 350, 
    border:'1px solid black', 
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column' ,
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center',
    gap: 2,
    }}>
        <Typography gutterBottom variant="h5" component="div">
            Здравствуйте!
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Для того чтобы отображалась информация вашего счета необходимо подключиться к вашему аккаунту Metamask.
        </Typography>

        <Button
         onClick={() => onConnection()}
         sx={{
          background: '#E79D0E', 
          color: 'white', 
          padding: 1,
          ":hover":{background: '#C18E2A'}}}>
          Подключить кошелёк
        </Button>
   </Box>
   </>
  );
}



