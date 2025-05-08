import { Stage } from '../types'; // Use a interface Stage/ChampionshipEvent do seu types/index.ts

// Ano base para as datas (ajuste se necessário)
export const YEAR = 2025;

// Helper para criar data ISO (simplificado, cuidado com timezone em produção real)
// Supõe horário de Brasília (-03:00) - ajuste offset se necessário
const createDate = (dayMonth: string, time: string = '12:00'): string => {
    const [dayStr, monthStr] = dayMonth.split('/');
    const day = parseInt(dayStr);
    const month = parseInt(monthStr); // Mês em JS é 0-indexado (Jan=0)
    const [hourStr, minuteStr] = time.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);

    // Validação básica
    if (isNaN(day) || isNaN(month) || isNaN(hour) || isNaN(minute) || month < 1 || month > 12 || day < 1 || day > 31) {
        console.error(`Data ou hora inválida recebida: ${dayMonth} ${time}`);
        // Retorna uma data inválida ou um padrão seguro
        const fallbackDate = new Date(YEAR, 0, 1); // 1 de Janeiro do ano base
        return fallbackDate.toISOString(); // Ou outra forma de indicar erro
    }

    try {
       // Cria data no fuso horário local
       const localDate = new Date(YEAR, month - 1, day, hour, minute);
       if (isNaN(localDate.getTime())) throw new Error("Data inválida gerada");

       // Formato ISO com offset UTC (mais padrão)
       // Use uma biblioteca como date-fns-tz para lidar corretamente com timezones em produção
       // return formatISO(localDate); // Exemplo com date-fns (requer importação)

       // Solução sem biblioteca extra (pode ter issues com DST/Timezone)
       const offsetMinutes = localDate.getTimezoneOffset(); // Offset local em minutos para UTC
       const offsetHours = Math.abs(offsetMinutes / 60);
       const offsetSign = offsetMinutes <= 0 ? '+' : '-'; // Invertido: UTC-3 -> +03:00 no offset JS
       const formattedOffset = `${offsetSign}${String(offsetHours).padStart(2, '0')}:00`;

       // Formata manualmente para YYYY-MM-DDTHH:mm:ss+HH:mm (ou -HH:mm)
        const pad = (num: number) => String(num).padStart(2, '0');
        return `${YEAR}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:00${formattedOffset}`;

    } catch (e) {
        console.error(`Erro ao criar data ISO para ${dayMonth} ${time}:`, e);
        const fallbackDate = new Date(YEAR, month - 1, day); // Fallback sem hora
        return fallbackDate.toISOString();
    }
};



export const calendarEventsData: Stage[] = [
    // --- KARTÓDROMO GRANJA VIANA (KGV) ---
    { id: 'kgv-25-02-07-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Fev', name: 'Old School - Desafio ACKA', date: createDate('07/02', '21:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 21:30, 22:00, 22:30' },
    { id: 'kgv-25-02-16-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Fev', name: 'Copa KGV', date: createDate('16/02', '15:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 15:30, 16:00' },
    { id: 'kgv-25-03-07-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Mar', name: 'Old School - Desafio ACKA', date: createDate('07/03', '21:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 21:30, 23:00, 23:30' },
    { id: 'kgv-25-03-14-end', championshipId: 'endurance-kgv-25', championshipName: 'Endurance KGV', year: YEAR, stageNumber: 'Mar', name: 'Endurance KGV', date: createDate('14/03', '20:00'), kartodromo: 'Kartódromo Granja Viana' }, // Assumi 20:00
    { id: 'kgv-25-03-23-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Mar', name: 'Copa KGV', date: createDate('23/03', '16:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 16:00, 16:30' },
    { id: 'kgv-25-04-25-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Abr', name: 'Old School - Desafio ACKA', date: createDate('25/04', '21:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 21:00, 21:30, 22:00' },
    { id: 'kgv-25-04-27-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Abr', name: 'Copa KGV', date: createDate('27/04', '15:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 15:30, 16:00' },
    { id: 'kgv-25-05-30-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Mai', name: 'Old School - Desafio ACKA', date: createDate('30/05', '21:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 21:00, 21:30, 22:00' },
    { id: 'kgv-25-05-25-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Mai', name: 'Copa KGV', date: createDate('25/05', '16:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 16:30, 17:00' },
    { id: 'kgv-25-06-04-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Jun', name: 'Old School - Desafio ACKA', date: createDate('04/06', '22:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 22:30, 23:00, 23:30' },
    { id: 'kgv-25-06-14-end', championshipId: 'endurance-kgv-25', championshipName: 'Endurance KGV', year: YEAR, stageNumber: 'Jun', name: 'Endurance KGV', date: createDate('14/06', '20:00'), kartodromo: 'Kartódromo Granja Viana' }, // Assumi 20:00
    { id: 'kgv-25-06-29-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Jun', name: 'Copa KGV', date: createDate('29/06', '15:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 15:30, 16:00' },
    { id: 'kgv-25-07-02-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Jul', name: 'Old School - Desafio ACKA', date: createDate('02/07', '21:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 21:00, 21:30, 22:00' },
    { id: 'kgv-25-07-13-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Jul', name: 'Copa KGV', date: createDate('13/07', '15:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 15:00, 15:30' },
    { id: 'kgv-25-08-01-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Ago', name: 'Old School - Desafio ACKA', date: createDate('01/08', '21:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 21:00, 21:30, 22:00' },
    { id: 'kgv-25-08-24-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Ago', name: 'Copa KGV', date: createDate('24/08', '16:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 16:30, 17:00' },
    { id: 'kgv-25-09-05-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Set', name: 'Old School - Desafio ACKA', date: createDate('05/09', '20:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 20:00, 20:30, 21:00' },
    { id: 'kgv-25-09-13-end', championshipId: 'endurance-kgv-25', championshipName: 'Endurance KGV', year: YEAR, stageNumber: 'Set', name: 'Endurance KGV', date: createDate('13/09', '20:00'), kartodromo: 'Kartódromo Granja Viana' }, // Assumi 20:00
    { id: 'kgv-25-09-28-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Set', name: 'Copa KGV', date: createDate('28/09', '15:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 15:30, 16:00' },
    { id: 'kgv-25-10-10-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Out', name: 'Old School - Desafio ACKA', date: createDate('10/10', '20:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 20:30, 22:30, 23:00' },
    { id: 'kgv-25-10-18-qday', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Out', name: 'Qualifying Day', date: createDate('18/10', '13:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horário: 13:00-15:30' }, // Associei à Copa KGV
    { id: 'kgv-25-10-19-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Out', name: 'Copa KGV', date: createDate('19/10', '18:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 18:00, 18:30' },
    { id: 'kgv-25-11-08-500mi', championshipId: '500-milhas-kgv-25', championshipName: '500 Milhas KGV', year: YEAR, stageNumber: 'Evento', name: '500 Milhas KGV', date: createDate('08/11', '08:00'), kartodromo: 'Kartódromo Granja Viana' },
    { id: 'kgv-25-11-10-os', championshipId: 'oldschool-acka-25', championshipName: 'Old School/Desafio ACKA', year: YEAR, stageNumber: 'Nov', name: 'Old School - Desafio ACKA', date: createDate('10/11', '22:30'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 22:30, 23:00, 23:30' }, // Repetiu 23:00, mantive
    { id: 'kgv-25-11-16-copa', championshipId: 'copa-kgv-25', championshipName: 'Copa KGV', year: YEAR, stageNumber: 'Nov', name: 'Copa KGV', date: createDate('16/11', '14:00'), kartodromo: 'Kartódromo Granja Viana',  notes: 'Horários: 14:00, 14:30' },
    { id: 'kgv-25-12-20-500mipro', championshipId: '500-milhas-kgv-25', championshipName: '500 Milhas KGV', year: YEAR, stageNumber: 'Evento Pro', name: '500 Milhas KGV Pro', date: createDate('20/12', '08:00'), kartodromo: 'Kartódromo Granja Viana' }, // Assumi 08:00

    // --- KARTÓDROMO SAN MARINO ---
    { id: 'sm-25-02-06-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Fev', name: 'Night Race', date: createDate('06/02', '20:00'), kartodromo: 'Kartódromo San Marino' }, // Assumi 20:00
    { id: 'sm-25-02-08-qday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Fev', name: 'Qualifying Day', date: createDate('08/02', '13:00'), kartodromo: 'Kartódromo San Marino' }, // Assumi 13:00
    { id: 'sm-25-02-09-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Fev', name: 'Race Day', date: createDate('09/02', '10:00'), kartodromo: 'Kartódromo San Marino' }, // Assumi 10:00
    { id: 'sm-25-03-06-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Mar', name: 'Night Race', date: createDate('06/03', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-03-08-tr-end', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Mar', name: 'Training Race / Endurance 3hs', date: createDate('08/03', '10:00'), kartodromo: 'Kartódromo San Marino' }, // Assumi 10:00
    { id: 'sm-25-03-09-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Mar', name: 'Race Day', date: createDate('09/03', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-04-03-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Abr', name: 'Night Race', date: createDate('03/04', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-04-05-tr-match', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Abr', name: 'Training Race / Match Race Evento', date: createDate('05/04', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-04-06-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Abr', name: 'Race Day', date: createDate('06/04', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-05-01-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Mai', name: 'Night Race', date: createDate('01/05', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-05-03-tr-end', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Mai', name: 'Training Race / Endurance 3hs', date: createDate('03/05', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-05-04-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Mai', name: 'Race Day', date: createDate('04/05', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-06-05-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Jun', name: 'Night Race', date: createDate('05/06', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-06-07-tr', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Jun', name: 'Training Race', date: createDate('07/06', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-06-08-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Jun', name: 'Race Day', date: createDate('08/06', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-07-03-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Jul', name: 'Night Race', date: createDate('03/07', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-07-05-tr-match', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Jul', name: 'Training Race / Match Race Evento', date: createDate('05/07', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-07-06-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Jul', name: 'Race Day', date: createDate('06/07', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-07-31-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Jul', name: 'Night Race', date: createDate('31/07', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-08-02-qday-end', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Ago', name: 'Qualifying Day / Endurance 3hs', date: createDate('02/08', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-08-03-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Ago', name: 'Race Day', date: createDate('03/08', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-09-11-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Set', name: 'Night Race', date: createDate('11/09', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-09-13-tr', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Set', name: 'Training Race', date: createDate('13/09', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-09-14-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Set', name: 'Race Day', date: createDate('14/09', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-10-09-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Out', name: 'Night Race', date: createDate('09/10', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-10-11-tr-end', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Out', name: 'Training Race / Endurance 3hs', date: createDate('11/10', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-10-12-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Out', name: 'Race Day', date: createDate('12/10', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-10-30-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Out', name: 'Night Race', date: createDate('30/10', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-11-01-tr-panda', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Nov', name: 'Training Race / The Panda Festival', date: createDate('01/11', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-11-02-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Nov', name: 'Race Day', date: createDate('02/11', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-11-27-night', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Nov', name: 'Night Race', date: createDate('27/11', '20:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-11-29-tr', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Nov', name: 'Training Race', date: createDate('29/11', '10:00'), kartodromo: 'Kartódromo San Marino' },
    { id: 'sm-25-11-30-raceday', championshipId: 'sm-series-25', championshipName: 'San Marino Series', year: YEAR, stageNumber: 'Nov', name: 'Race Day', date: createDate('30/11', '10:00'), kartodromo: 'Kartódromo San Marino' },

    // --- KARTÓDROMO DE ITU ---
    { id: 'itu-25-02-22-kids', championshipId: 'copa-itu-kids-25', championshipName: 'Copa Itu Kids', year: YEAR, stageNumber: 1, name: 'Race Day Kids - Abertura/Corrida Pais', date: createDate('22/02', '10:00'), kartodromo: 'Kartódromo de Itu' }, // Assumi 10:00
    { id: 'itu-25-03-16-geral', championshipId: 'copa-itu-geral-25', championshipName: 'Copa Itu', year: YEAR, stageNumber: 1, name: 'Race Day', date: createDate('16/03', '10:00'), kartodromo: 'Kartódromo de Itu' },
    { id: 'itu-25-04-12-geral', championshipId: 'copa-itu-geral-25', championshipName: 'Copa Itu', year: YEAR, stageNumber: 2, name: 'Race Day', date: createDate('12/04', '10:00'), kartodromo: 'Kartódromo de Itu' },
    { id: 'itu-25-05-24-geral', championshipId: 'copa-itu-geral-25', championshipName: 'Copa Itu', year: YEAR, stageNumber: 3, name: 'Race Day', date: createDate('24/05', '10:00'), kartodromo: 'Kartódromo de Itu' },
    { id: 'itu-25-07-05-geral', championshipId: 'copa-itu-geral-25', championshipName: 'Copa Itu', year: YEAR, stageNumber: 4, name: 'Race Day', date: createDate('05/07', '10:00'), kartodromo: 'Kartódromo de Itu' },
    { id: 'itu-25-08-16-kids', championshipId: 'copa-itu-kids-25', championshipName: 'Copa Itu Kids', year: YEAR, stageNumber: 'Evento', name: 'Endurance do Dia dos Pais Kids', date: createDate('16/08', '10:00'), kartodromo: 'Kartódromo de Itu' },
    { id: 'itu-25-09-06-geral', championshipId: 'copa-itu-geral-25', championshipName: 'Copa Itu', year: YEAR, stageNumber: 5, name: 'Race Day', date: createDate('06/09', '10:00'), kartodromo: 'Kartódromo de Itu' },
    { id: 'itu-25-10-11-geral', championshipId: 'copa-itu-geral-25', championshipName: 'Copa Itu', year: YEAR, stageNumber: 6, name: 'Race Day', date: createDate('11/10', '10:00'), kartodromo: 'Kartódromo de Itu' },
    { id: 'itu-25-11-22-geral', championshipId: 'copa-itu-geral-25', championshipName: 'Copa Itu', year: YEAR, stageNumber: 7, name: 'Race Day - Confraternização', date: createDate('22/11', '10:00'), kartodromo: 'Kartódromo de Itu' },
    { id: 'itu-25-12-14-geral', championshipId: 'copa-itu-geral-25', championshipName: 'Copa Itu', year: YEAR, stageNumber: 'Final', name: 'Race Day Final', date: createDate('14/12', '10:00'), kartodromo: 'Kartódromo de Itu' }, // Assumi dia 14/12
];

// Ordenar por data (opcional, pode ser feito no componente)
calendarEventsData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());