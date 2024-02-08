import React, {  useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { BsTelephone, BsXLg, BsTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import fb from "../../assets/images/facebook-icon.svg";
import tg from "../../assets/images/tg-icon.svg";
import wp from "../../assets/images/wp-icon.svg";
import './ConnectButton.scss'; // импортируем файл стилей SCSS

function ConnectButton() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            {visible && (
                <span className='contact-icons'>
                    <Tooltip title="Контакт" className="tooltip">
                        <Link to="/contacts">
                            <div className="icon-container">
                                <span className='rounded-full bg-white h-12 w-12 flex items-center justify-center cursor-pointer'>
                                    <BsTelephoneFill className="text-green-700" />
                                </span>
                            </div>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Телеграм" className="tooltip">
                        <div className="icon-container">
                            <span className='rounded-full bg-white h-12 w-12 flex items-center justify-center cursor-pointer'>
                                <a href='/' target='_blank' rel="noopener noreferrer">
                                    <img src={tg} alt="Telegram" className="icon" />
                                </a>
                            </span>
                        </div>
                    </Tooltip>
                    <Tooltip title="WhatsApp" className="tooltip">
                        <div className="icon-container">
                            <span className='rounded-full bg-white h-12 w-12 flex items-center justify-center cursor-pointer'>
                                <a href='/' target='_blank' rel="noopener noreferrer">
                                    <img src={wp} alt="WhatsApp" className="icon" />
                                </a>
                            </span>
                        </div>
                    </Tooltip>
                    <Tooltip title="ВКонтакте" className="tooltip">
                        <div className="icon-container">
                            <span className='rounded-full bg-white h-12 w-12 flex items-center justify-center cursor-pointer'>
                                <a href='/' target='_blank' rel="noopener noreferrer">
                                    <img src={fb} alt="VK" className="icon" />
                                </a>
                            </span>
                        </div>
                    </Tooltip>
                </span>
            )}

            <span className="toggle-icon" onClick={() => setVisible(!visible)}>
                <span className="circle"></span>
                <span className="inner-circle">{visible ? <BsXLg className="text-white" /> : <BsTelephone className="text-white" />}</span>
            </span>
        </div>
    );
}

export default ConnectButton;
