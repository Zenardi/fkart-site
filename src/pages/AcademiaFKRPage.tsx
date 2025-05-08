// src/pages/AcademiaFKRPage.tsx (Nova Versão Informativa)
import React from 'react';
import {
  Typography,
  Card,
  CardBody,
  List,
  ListItem,
  Chip,
  Button
} from '@material-tailwind/react';

// Ícones para ilustrar as seções (Opcional, instale: npm install react-icons)
import { FaChalkboardTeacher, FaUserGraduate, FaTools, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const AcademiaFKRPage: React.FC = () => {

  // --- Dados (poderiam vir de um arquivo data/ ou API) ---
  const emailContato = 'forcekartracingfkr@gmail.com';
  const numeroWhatsapp = '5511999435453'; // Descomente e coloque o número se quiser botão WhatsApp
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}`;

  const aulasCoach = [
    { kartodromo: 'KGV', itens: [{ duracao: '60 minutos', preco: 530 }, { duracao: '30 minutos', preco: 440 }] },
    { kartodromo: 'San Marino', itens: [{ duracao: '25 minutos', preco: 440 }, { duracao: 'Training Race coletivo', preco: 210 }] },
    { kartodromo: 'Itu', itens: [{ duracao: '25 minutos', preco: 440 }] },
    { kartodromo: 'Interlagos', itens: [{ duracao: '25 minutos', preco: 440 }] },
    { kartodromo: 'Nova Odessa', itens: [{ duracao: '25 minutos', preco: 440 }] },
    { kartodromo: 'Aldeia da Serra', itens: [{ duracao: '30 minutos', preco: 660 }] },
  ];

  const coaches = ['Marcel Conti', 'Alessandro Marcomini', 'Raphael Correa', 'Ryan Nishioka', 'Peterson Nakamura', 'Lucas Aquarelli'];

  const locacaoKarts = [
    { tipo: '2 Tempos', preco: 2500 },
    { tipo: 'F4', preco: 800 },
    { tipo: 'Cadete', preco: 650 },
  ];

  // Função helper para formatar moeda
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  // --- Fim Dados ---


  return (
    // Container principal da página
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">

      {/* Título Principal */}
      <Typography as="h1" variant="h2" color="blue-gray" placeholder={undefined} className="text-center font-bold border-b pb-4 mb-10">
        Academia FKR
      </Typography>

      {/* --- Seção: Escola Brasileira de Kart (EBK) - CBA --- */}
      <Card placeholder={undefined} shadow={false} className="border border-blue-gray-100">
            <CardBody placeholder={undefined}>
               <div className='flex items-center gap-4 mb-5 border-b border-blue-gray-100 pb-3'>
                   {/* 1. Cor do Ícone alterada */}
                   <FaUserGraduate className="w-8 h-8 text-red-600 flex-shrink-0" />
                   <Typography as="h2" variant="h4" color="blue-gray" placeholder={undefined} className="font-semibold">
                     Escola Brasileira de Kart (EBK) - Certificação CBA
                   </Typography>
               </div>

               <div className="space-y-6 text-gray-800 leading-relaxed">
                 <section>
                   {/* 2. Cor do Título alterada */}
                   <Typography as="h3" variant="h6" color="red" textGradient placeholder={undefined} className="font-semibold mb-2">
                     O QUE É?
                   </Typography>
                   <Typography placeholder={undefined} className='text-sm md:text-base'>
                     A Escola Brasileira de Kart é um projeto que visa incentivar a entrada de novos pilotos no kartismo nacional... (texto completo)
                   </Typography>
                 </section>

                 <section>
                   {/* 3. Cor do Título alterada */}
                   <Typography as="h3" variant="h6" color="red" textGradient placeholder={undefined} className="font-semibold mb-2">
                     COMO FUNCIONA O CURSO?
                   </Typography>
                   <Typography placeholder={undefined} className='text-sm md:text-base mb-2'>
                     O curso da Escola Brasileira de Kart foi baseado em quatro módulos: Primeiro Volante, Volante de Bronze, Volante de Prata, Volante de Ouro.
                   </Typography>
                   <Typography placeholder={undefined} className='text-sm md:text-base'>
                     Em cada uma das aulas os pilotos serão submetidos ao aprendizado... receberão gratuitamente a primeira Filiação de Pilotos... (texto completo)
                    </Typography>
                 </section>

                 <section>
                    {/* 4. Cor do Título alterada */}
                    <Typography as="h3" variant="h6" color="red" textGradient placeholder={undefined} className="font-semibold mb-2">
                      PRINCIPAIS OBJETIVOS:
                    </Typography>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base pl-4">
                      <li>Desenvolver a prática do kart</li>
                      <li>Ensinar os fundamentos da pilotagem</li>
                      <li>Facilitar a acessibilidade</li>
                      <li>Sensibilizar os jovens condutores</li>
                    </ul>
                 </section>

                 <section className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
                    <div>
                        {/* 5. Cor do Título alterada */}
                        <Typography as="h3" variant="h6" color="red" textGradient placeholder={undefined} className="font-semibold mb-2">
                          Valores e Formato
                        </Typography>
                         {/* 6. Cor do Chip alterada */}
                         <Chip size="lg" color="red" variant="gradient" value={`Pacote 4 Aulas: ${formatCurrency(1800)}`} className="mb-3 inline-block"/>
                         {/* 7. Cores do Fundo/Borda da Nota alteradas */}
                         <Typography placeholder={undefined} className='text-sm italic bg-red-50 border border-red-200 p-3 rounded-md shadow-sm'>
                           <b>Importante:</b> Cada módulo requer no mínimo 4 aulas.
                           A aula é <b>individual</b> (somente instrutor e aluno), composta por ensino teórico e prático.
                         </Typography>
                     </div>
                     <div>
                         {/* 8. Cor do Título alterada */}
                         <Typography as="h3" variant="h6" color="red" textGradient placeholder={undefined} className="font-semibold mb-2">
                           Instrutor Certificado EBK/CBA:
                         </Typography>
                          <Typography placeholder={undefined} className='text-base font-medium text-blue-gray-800'>
                            Marcos Takuma
                          </Typography>
                      </div>
                 </section>
               </div>
            </CardBody>
          </Card>

      {/* --- Seção: Aulas Coach (Rental Kart) --- */}
      <Card placeholder={undefined} className="overflow-hidden border border-blue-gray-100 shadow-lg">
         <CardBody placeholder={undefined}>
            <div className='flex items-center gap-4 mb-6 border-b border-blue-gray-100 pb-3'>
               <FaChalkboardTeacher className="w-8 h-8 text-indigo-600 flex-shrink-0" />
               <Typography as="h2" variant="h4" color="blue-gray" placeholder={undefined} className="font-semibold">
                 Aulas Coach (Rental Kart)
               </Typography>
             </div>

            {/* Grid de Preços/Locais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
               {aulasCoach.map(aula => (
                 <div key={aula.kartodromo} className="p-4 border rounded-lg bg-indigo-50/30 shadow-sm">
                   <Typography color="indigo" placeholder={undefined} className="font-semibold mb-2 flex items-center gap-1.5 text-lg">
                     <FaMapMarkerAlt className="w-4 h-4"/> {aula.kartodromo}
                   </Typography>
                   <ul className="space-y-1.5">
                     {aula.itens.map(item => (
                       <li key={item.duracao} className="flex justify-between items-center text-sm border-t border-indigo-100 pt-1 first:border-t-0 first:pt-0">
                         <Typography as="span" placeholder={undefined} className="text-gray-700">{item.duracao}</Typography>
                         <Chip size="sm" color="indigo" variant="ghost" value={formatCurrency(item.preco)} />
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
            </div>
            <Typography variant="small" color="gray" placeholder={undefined} className="italic mb-6 text-center">
              *Obs: Avaliar o custo de deslocamento para aulas fora do kartódromo base do coach.*
            </Typography>

            {/* Lista de Coaches */}
            <Typography as="h3" variant="h6" color="indigo" placeholder={undefined} className="font-semibold mb-3 text-center border-t pt-4">
              Coaches Disponíveis
            </Typography>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
               {coaches.map(coach => (
                  <Chip key={coach} variant='outlined' color='blue-gray' value={coach} />
               ))}
            </div>
         </CardBody>
      </Card>




      {/* --- Seção: Locação de Kart Próprio (KGV) --- */}
      <Card placeholder={undefined} className="overflow-hidden border border-blue-gray-100 shadow-lg">
         <CardBody placeholder={undefined}>
           <div className='flex items-center gap-4 mb-6 border-b border-blue-gray-100 pb-3'>
               <FaTools className="w-8 h-8 text-gray-600 flex-shrink-0" />
               <Typography as="h2" variant="h4" color="blue-gray" placeholder={undefined} className="font-semibold">
                 Locação de Kart Próprio (Somente KGV)
               </Typography>
           </div>
           <div className="space-y-3">
             {locacaoKarts.map(kart => (
                <div key={kart.tipo} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-100 rounded-lg border border-gray-200 gap-2">
                   <Typography placeholder={undefined} className="font-semibold text-lg text-blue-gray-800">{kart.tipo}</Typography>
                   <Chip size="md" color="gray" variant="ghost" value={`${formatCurrency(kart.preco)}`} />
                </div>
             ))}
           </div>
            <Typography variant="small" color="gray" placeholder={undefined} className="italic mt-5 text-center">
             *Valores de diária, podem variar. Consulte para detalhes e disponibilidade.*
           </Typography>
         </CardBody>
      </Card>

       {/* --- Seção: Contato --- */}
       <Card placeholder={undefined} className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 shadow-lg">
         <CardBody placeholder={undefined} className='text-center py-10'>
           <Typography as="h3" variant="h4" color="white" placeholder={undefined} className="font-semibold mb-4">
             Ficou Interessado? Fale Conosco!
           </Typography>
            <Typography placeholder={undefined} className="mb-6 text-blue-gray-200 max-w-xl mx-auto">
              Para agendar aulas, tirar dúvidas sobre a EBK ou locação de karts, entre em contato conosco através dos canais abaixo:
            </Typography>
            <div className="flex flex-wrap justify-center gap-4">
               <a href={`mailto:${emailContato}`}>
                 <Button color="white" variant='outlined' className="flex items-center gap-2 text-white border-white/50 hover:bg-white/10" placeholder={undefined}>
                    <FaEnvelope className="w-5 h-5"/> Enviar Email
                 </Button>
               </a>
                {/* Se tiver número do WhatsApp */}
                 {numeroWhatsapp && (
                   <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
                     <Button color="green" variant='gradient' className="flex items-center gap-2" placeholder={undefined}>
                       <FaWhatsapp className="w-5 h-5"/> Chamar no WhatsApp
                     </Button>
                   </a>
                )}
            </div>
         </CardBody>
       </Card>

      {/* O formulário antigo foi removido/substituído pelo conteúdo acima */}

    </div> // Fim container principal
  );
};

export default AcademiaFKRPage;