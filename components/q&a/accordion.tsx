import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Accordion = ({ id, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='accordion'>
            <motion.div
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className={`${!isOpen ? 'border-b border-[#ddd]' : ''} accordion__question`}>
                    {question}
                    {
                        isOpen ? (
                            <BsChevronUp/>
                        ) : (
                            <BsChevronDown/>
                        )
                    }
                </div>
            </motion.div>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                        },
                        }}
                        exit={{
                        opacity: 0,
                        y: '-10%',
                        transition: {
                            duration: 0.5,
                        },
                        }}
                        style={{
                            borderBottom: `${isOpen ? '1px solid #ddd': ''}`,
                            marginTop: '10px',
                            paddingBottom: "2.3rem"
                        }}
                    >
                        <span className='accordion__answer'>
                            {answer}
                        </span>
                    </motion.div>
                ) : (
                ''
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
