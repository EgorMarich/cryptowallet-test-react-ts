'use client'

import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { initialStateType } from "@/public/types/initialStateTypes";
import { updateAccount } from "@/public/utils/updateAccount";
import image from "../../public/assets/ethImage.png"
import Image from "next/image";


export default function Wallet() {
    const initialState: initialStateType = {
        accounts: [],
        balance: null,
    };

    const [wallet, setWallet] = useState<initialStateType>(initialState);
    const [transactionWallet, setTransactionWallet] = useState<string | null>(null)
    const [transactionSum, setTransactionSum] = useState<string | null>(null)
     
    useEffect(() => {
        updateAccount(setWallet)
    }, [])

    return ( 
    <>
        <Box sx={{
            width: '100 vw', 
            height: 100, 
            border:'1px solid black', 
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            background: 'white',
            pl: 10,
            }}
        >
            <Typography sx={{fontSize: 24}} component="div">
                Ваш аккаунт: {wallet.accounts[0]}
            </Typography>
        </Box>
        
        <Box sx={{
                mt: 2,
                width: '100 vw', 
                height: 100,  
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#D0A8E3',
                color: 'white',
                pl: 10 ,
                pr: 10,
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Image src={image} alt="eth" />
                        <Typography sx={{fontSize: 24}}  component="h4">
                            Ethereum:
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{fontSize: 24}}  component="h4">
                             {wallet.balance}
                        </Typography>
                    </Box>
        </Box>

        <Box sx={{
            width: '50vw',
            height: 500,
            border: '1px solid black',
            borderRadius: 10,
            mt: 20,
            ml: 'auto',
            mr: 'auto', 
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Typography sx={{fontSize: 24}}  component="h4">
                            Выполнить транзакцию
            </Typography>

            <TextField sx={{
                width: '70%',
            }} label='Кошелёк получателя' 
                value={transactionWallet}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTransactionWallet(event.target.value); }}
            />
            <TextField sx={{
                width: '70%',
            }} 
                type="number"
                label='Сумма перевода'
                value={transactionSum}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTransactionSum(event.target.value); }}
            />
            <Button sx={{
                width: '70%',
                height: 50,
                background: '#E79D0E',
                color: 'white', 
                padding: 1,
                ":hover":{background: '#C18E2A'}
            }} > Перевести</Button>
        </Box>
    </>
)
}

