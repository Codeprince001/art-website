import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box
} from '@chakra-ui/react';

import { accordionItems } from '../assets/constants';

import { IoMdAdd as AddIcon } from "react-icons/io";
import { FiMinus as MinusIcon } from "react-icons/fi";
const FAQ = () => {
  return (
    <div className='bg-[#ffffff] pb-[20%] rounded-bl-full rounded-br-full sm:max-[768px]:pb-[30%]'>
      <div className='p-8  md:w-[80%] w-full m-auto'>
        <h2 className='text-[36px] pb-8 text-[#1E0734] font-medium'>FAQ</h2>

        <Accordion allowToggle>
          {
            accordionItems.map((item) => {
              return (
                <AccordionItem className='pb-1' key={item.title}>
                  {({ isExpanded }) => (
                    <>
                      <h2 className='text-[18px] text-[#1E0734] bg-[#EDDBFE] p-[24px]'>
                        <AccordionButton _expanded={{ color: '#7D2AE7' }}>
                          <Box as="span" flex='1' textAlign='left' className='text-[14px] md:text-[18px]'>
                            {item.title}
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize='24px' color='#1E0734' fontWeight="800" />
                          ) : (
                            <AddIcon fontSize='24px' color="#1E0734" fontWeight="800" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel p={8} pt={8} color="#1E0734" className='leading-5 bg-[#EDDBFE] text-[14px]'>
                        {item.description}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              );
            })
          }


        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
