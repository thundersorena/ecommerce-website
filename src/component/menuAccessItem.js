import React from 'react';
import PublicMenu from '../mock/menu';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { BaseColor } from './Tools';
const MenuAccesItems = () => {
    const colors = BaseColor();
    const menuItmes = PublicMenu()
    return (
        <Stack m={2} bgcolor={BaseColor}>
            <Typography component={'ui'} >

                {menuItmes.map((x) => {
                    return (
                        <>

                            {x.active === true &&

                                <Typography component={'li'} key={x.id} my={1.5} >
                                    <Link to={x.link} title={x.title}>
                                        <Typography color={colors.text} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography display={'inline'}>{x?.icon}</Typography>
                                            <Typography display={'inline'} sx={{ ml: 1 }}>{x.title}</Typography>
                                        </Typography>
                                    </Link>
                                </Typography>

                            }

                        </>
                    )
                })
                }
            </Typography>
        </Stack>
    );
};

export default MenuAccesItems;