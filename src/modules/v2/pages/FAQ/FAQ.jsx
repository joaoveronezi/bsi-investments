/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { TitleWrapper } from "modules/v1/pages/Advice/Advice.styles";
import React from "react";
import {
    Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel
} from "react-accessible-accordion";
import { AccordionWrapper, FAQWrapper } from "./FAQ.styles";
import "react-accessible-accordion/dist/fancy-example.css";

const FAQCopy = [
    {
        title: "Porque ter um assessor e não fazer direto na XP?",
        items: ["A Black Sheep Investimentos é um escritório credenciado a XP. O assessor BSI consegue trazer as melhores soluções, pois conforme nosso processo de jornada guiada conseguimos mapear as reais necessidades dos nossos clientes."]
    },
    {
        title: "Como funciona a assessoria BSI?",
        items: [
            "Nossa assessoria de investimentos é dividida em 5 etapas:",
            "1. Provocamos a reflexão do cliente sobre propósito;",
            "2. Transformamos proposito em objetivos financeiros claros;",
            "3. Estruturamos um estudo de investimentos alinhados com objetivos reais;",
            "4. Fazemos a apresentação do estudo em uma versão inicial para validação e ajustes se for necessário;",
            "5. Follow-up ativo da carteira de investimentos em modelo 360º;",
        ]
    },
    {
        title: "Qual valor da assessoria com a BSI?",
        items: ["A remuneração dos nossos assessores é obtida através de uma comissão paga pela XP Investimentos pelas distribuições de ativos financeiros feitas para seus clientes.",
            "Dessa forma, a BSI não possui custos diretos aos clientes, visto que quem remunera nossa assessoria é a própria XP Investimentos.",
            "O sucesso de nosso time está diretamente ligado ao sucesso da jornada dos clientes, portanto focamos ao máximo na experiencia do cliente.",
        ]
    },
    {
        title: "Onde fica guardado meu dinheiro?",
        items: ["Todos os valores transferidos para sua conta investimento na XP ficam na custódia da XP e das instituições financeiras onde você efetuou o investimento.",
            "Todas as instituições presentes na plataforma da XP estão devidamente autorizadas a funcionar pelo Banco Central do Brasil e pela CVM, sendo auditadas por esses órgãos.",
        ]
    },

];
const FAQ = () => (
    <FAQWrapper>
        <TitleWrapper style={{ marginBottom: "50px", marginTop: window.innerWidth <= 1440 ? "100px" : "0" }}>
            <h1>PERGUNTAS FREQUENTES</h1>
        </TitleWrapper>
        <AccordionWrapper>
            <Accordion allowZeroExpanded>
                {FAQCopy.map((elem, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {elem.title}
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            {elem.items.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </AccordionWrapper>
    </FAQWrapper>
);

export default FAQ;
