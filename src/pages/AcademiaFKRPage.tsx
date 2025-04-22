// src/pages/AcademiaFKRPage.tsx (Com texto atualizado e modal)
import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardBody,
  Select,
  Option,
  Input,
  Button,
  // 1. Certifique-se que os componentes do Dialog estão importados
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { format } from 'date-fns';

// --- Mock Data (Manter ou ajustar conforme necessário) ---
const kartodromosDisponiveis = [
  { id: 'interlagos', name: 'Kartódromo Interlagos' },
  { id: 'kgv', name: 'Kartódromo Granja Viana' },
  { id: 'aldeia', name: 'Kartódromo Aldeia da Serra' },
  { id: 'san_marino', name: 'Kartódromo San Marino (Paulínia)' },
];

const instrutoresDisponiveis = [
  { id: 'takuma', name: 'Marcos Takuma' },
  { id: 'instrutor_b', name: 'Instrutor Beltrano' },
  { id: 'instrutor_c', name: 'Instrutora Cicrana' },
];
// --- Fim Mock Data ---

const AcademiaFKRPage: React.FC = () => {
  // Estados para seleções (Manter)
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedKartodromo, setSelectedKartodromo] = useState<string>('');
  const [selectedInstructor, setSelectedInstructor] = useState<string>('');

  // Estado para controlar a visibilidade do modal (Manter)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const today = format(new Date(), 'yyyy-MM-dd');

  // Função do botão de agendar (Manter - com setIsModalOpen(true))
  const handleAgendarClick = () => {
    // --- INÍCIO: DEBUG ---
    // Imprime os valores atuais dos estados no console do navegador
    console.log('--- Verificando Valores Antes da Validação ---');
    console.log('Data Selecionada:', selectedDate, `(É falsy? ${!selectedDate})`);
    console.log('Hora Selecionada:', selectedTime, `(É falsy? ${!selectedTime})`);
    console.log('Kartódromo Selecionado:', selectedKartodromo, `(É falsy? ${!selectedKartodromo})`);
    console.log('Instrutor Selecionado:', selectedInstructor, `(É falsy? ${!selectedInstructor})`);
    console.log('--------------------------------------------');
    // --- FIM: DEBUG ---

    // Validação simples
    if (!selectedDate || !selectedTime || !selectedKartodromo || !selectedInstructor) {
      alert('Por favor, preencha todos os campos para solicitar o agendamento.'); // Mantém alert para erro de validação por enquanto
      return;
    }

    // Lógica de "envio" (simulada)
    console.log('Solicitação de Agendamento:', {
      data: selectedDate,
      hora: selectedTime,
      kartodromo: selectedKartodromo,
      instrutor: selectedInstructor,
    });

    // Abre o modal em vez do alert de sucesso
    setIsModalOpen(true);
  };

  // Função para fechar o modal (Manter)
  const handleCloseModal = () => setIsModalOpen(false);
  const nativeInputStyle = "mt-1 block w-full px-3 py-2 bg-white border border-blue-gray-200 rounded-md text-base text-gray-900 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">

      {/* --- Texto Introdutório Atualizado --- */}
      <Typography as="h2" variant="h2" color="blue-gray" placeholder={undefined} className="text-center mb-6 font-bold">
        Academia FKR - Agende sua Aula/Treino
      </Typography>
      {/* Ajustei para h4 para melhor hierarquia e adicionei negrito */}
      <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="text-center mb-4 font-semibold">
        Carteirinha de Piloto - Mini - Cadete - F4 Junior
      </Typography>
      <Typography color="gray" placeholder={undefined} className="text-center mb-6 text-base leading-relaxed"> {/* Aumentei margem inferior e line-height */}
        Melhore sua pilotagem com nossos instrutores experientes! Selecione os detalhes abaixo para solicitar um horário. Entraremos em contato para confirmar a disponibilidade.
      </Typography>
      {/* Usei variant paragraph para dar um pouco mais de destaque e ajustei margens */}
      <Typography variant="paragraph" color="blue-gray" placeholder={undefined} className="text-center mb-3 text-sm font-medium">
        Escola Brasileira de Kart - Certificação da Confederação Brasileira de Automobilismo - CBA
      </Typography>
      <Typography variant="small" color="gray" placeholder={undefined} className="text-center mb-12"> {/* Aumentei bastante a margem antes do card */}
        Crianças de 06 a 12 anos e Adolescentes de 13 a 17 anos
      </Typography>
      {/* --- Fim do Texto Introdutório --- */}


      <Card className="w-full border border-blue-gray-100 shadow-md" placeholder={undefined}> {/* Adicionado shadow */}
        <CardBody placeholder={undefined}>
          <form className="flex flex-col gap-6">
            {/* Input de Data */}
            {/* --- Input de Data NATIVO --- */}
            <div>
              <label htmlFor="aula-data" className="block text-sm font-medium text-blue-gray-700">
                Data desejada
              </label>
              <input
                id="aula-data"
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  console.log('Native Date onChange:', e.target.value); // Log para confirmar
                  setSelectedDate(e.target.value);
                }}
                min={today}
                className={nativeInputStyle} // Aplica estilos Tailwind
              />
               <Typography variant="small" color="gray" className="mt-1 flex items-center gap-1 font-normal opacity-70" placeholder={undefined}>
                 Selecione o dia para a aula.
               </Typography>
            </div>

            {/* --- Input de Hora NATIVO --- */}
            <div>
               <label htmlFor="aula-hora" className="block text-sm font-medium text-blue-gray-700">
                 Horário aproximado
               </label>
              <input
                id="aula-hora"
                type="time"
                value={selectedTime}
                onChange={(e) => {
                  console.log('Native Time onChange:', e.target.value); // Log para confirmar
                  setSelectedTime(e.target.value);
                }}
                step="1800" // Mantém o step de 30 min
                className={nativeInputStyle} // Aplica estilos Tailwind
              />
               <Typography variant="small" color="gray" className="mt-1 flex items-center gap-1 font-normal opacity-70" placeholder={undefined}>
                  Escolha o horário (intervalos de 30 min).
               </Typography>
            </div>
            {/* Select Kartódromo */}
            <div>
              <Select label="Selecione o Kartódromo" value={selectedKartodromo} onChange={(value) => setSelectedKartodromo(value || '')} placeholder={undefined} size="lg" >
                {kartodromosDisponiveis.map((kartodromo) => (<Option key={kartodromo.id} value={kartodromo.id}>{kartodromo.name}</Option>))}
              </Select>
              <Typography variant="small" color="gray" className="mt-1 flex items-center gap-1 font-normal opacity-70" placeholder={undefined}>Onde você gostaria de treinar?</Typography>
            </div>
            {/* Select Instrutor */}
            <div>
              <Select label="Selecione o Instrutor" value={selectedInstructor} onChange={(value) => setSelectedInstructor(value || '')} placeholder={undefined} size="lg" >
                {instrutoresDisponiveis.map((instrutor) => (<Option key={instrutor.id} value={instrutor.id}>{instrutor.name}</Option>))}
              </Select>
              <Typography variant="small" color="gray" className="mt-1 flex items-center gap-1 font-normal opacity-70" placeholder={undefined}>Com quem você prefere treinar?</Typography>
            </div>
            {/* Botão Agendar */}
            <Button color="blue" fullWidth onClick={handleAgendarClick} placeholder={undefined} size="lg" className='mt-4'>
              Solicitar Agendamento
            </Button>
          </form>
        </CardBody>
      </Card>

      {/* --- Componente Dialog (Modal - Manter como estava) --- */}
      <Dialog open={isModalOpen} handler={handleCloseModal} placeholder={undefined} size="sm">
        <DialogHeader placeholder={undefined}>
            <Typography variant="h5" color="blue-gray" placeholder={undefined}>
                Solicitação Enviada!
            </Typography>
        </DialogHeader>
        <DialogBody divider placeholder={undefined}>
            <Typography color="gray" className="font-normal" placeholder={undefined}>
            Sua solicitação de agendamento para aula/treino foi enviada com sucesso.
            Entraremos em contato em breve pelo WhatsApp ou telefone cadastrado para confirmar a disponibilidade e os próximos passos.
            </Typography>
        </DialogBody>
        <DialogFooter placeholder={undefined}>
          <Button variant="text" color="blue-gray" onClick={handleCloseModal} placeholder={undefined}>
            <span>Fechar</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* --- Fim do Dialog --- */}

    </div>
  );
};

export default AcademiaFKRPage;