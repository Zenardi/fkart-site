// src/data/championships.ts
import { Championship, Category } from '../types';

const YEAR = 2025;

// Exemplo de como ficaria (substitua pelo texto real)
const regulamentoCopaFK2025 = `
**REGULAMENTO GERAL – CAMPEONATO DE KART AMADOR [NOME DO CAMPEONATO] [ANO]**

**PREÂMBULO**

Este regulamento estabelece as regras e diretrizes para a participação e condução do Campeonato de Kart Amador [Nome do Campeonato] [Ano]. O objetivo principal é promover a confraternização, o espírito esportivo, a competição justa e o acesso ao automobilismo de base através do kartismo amador. Todos os participantes, ao se inscreverem, declaram ter lido, compreendido e concordado com todos os termos deste regulamento.

**Art. 1º – OBJETIVO E ESPÍRITO DO CAMPEONATO**

§1º Promover a prática do kartismo amador de forma organizada e segura.
§2º Fomentar a amizade e o respeito entre os participantes.
§3º Incentivar a competição leal (*fair play*) e o espírito esportivo.

**Art. 2º – PARTICIPANTES E ELEGIBILIDADE**

§1º O campeonato é aberto a pilotos amadores, homens e mulheres, com idade mínima de [Ex: 16] anos completos na data da primeira etapa. Menores de 18 anos devem apresentar autorização dos pais ou responsáveis legais.
§2º Considera-se piloto amador aquele que não possua carteira profissional de piloto de kart ou automobilismo (nacional ou internacional) e que não tenha participado regularmente de campeonatos oficiais/federados nos últimos [Ex: 3] anos. Casos omissos serão analisados pela organização.
§3º A inscrição implica na aceitação integral deste regulamento e na assinatura de termo de responsabilidade (geralmente fornecido pelo kartódromo).

**Art. 3º – FORMATO DO CAMPEONATO**

§1º O campeonato será composto por [Número] etapas, realizadas nos seguintes kartódromos e datas (sujeito a alterações):
* Etapa 1: [Data] – [Kartódromo]
* Etapa 2: [Data] – [Kartódromo]
* ...
* Etapa [Número]: [Data] – [Kartódromo]
§2º Todas as etapas serão válidas para a pontuação final do campeonato.
§3º Haverá [Número] descarte(s) do(s) pior(es) resultado(s) para a classificação final. A etapa de encerramento [ou especificar quais] poderá ter pontuação dobrada [ou diferente] e/ou não permitir descarte.

**Art. 4º – EQUIPAMENTO E KARTS**

§1º Serão utilizados os karts fornecidos pelos kartódromos parceiros (modalidade Rental Kart). Não é permitida nenhuma modificação mecânica nos karts por parte dos pilotos ou equipes.
§2º A distribuição dos karts entre os pilotos será feita por sorteio antes do início da tomada de tempo de cada etapa, na presença dos participantes ou seus representantes.
§3º **Equipamento de Segurança Obrigatório:** É de responsabilidade de cada piloto providenciar e utilizar:
* Capacete com viseira (fechado ou aberto com óculos de proteção).
* Macacão apropriado para kartismo ou calça comprida e jaqueta/blusa de manga comprida (material resistente, não inflamável – Jeans grosso é geralmente aceito, Nylon fino não).
* Luvas que cubram completamente as mãos e punhos.
* Calçado fechado (tênis são adequados). Sapatilhas de pilotagem são recomendadas.
* Balaclava (recomendado por higiene).
§4º **Equipamento de Segurança Recomendado:** Protetor de pescoço e protetor de costelas.
§5º A organização e/ou a direção de prova do kartódromo podem impedir a participação do piloto que não estiver utilizando o equipamento de segurança adequado.
§6º **Lastro:** Será adotado um sistema de lastreamento para equalizar o peso dos pilotos. O peso mínimo do conjunto piloto + equipamento + lastro será definido em [Ex: 85, 90, 95] kg. A pesagem oficial ocorrerá [Definir momento: antes da classificação? Após a corrida? Ambos?]. Lastros serão fornecidos pelo kartódromo ou pela organização, conforme disponibilidade e regras locais.

**Art. 5º – PROCEDIMENTOS DE ETAPA**

§1º O cronograma padrão de cada etapa será (horários são exemplos e devem ser definidos):
* [19:00 - 19:30]: Chegada dos pilotos, confirmação de presença (check-in) e pagamento.
* [19:30 - 19:50]: Pesagem inicial (se aplicável) e sorteio dos karts.
* [19:50 - 20:10]: Briefing obrigatório com Diretor de Prova.
* [20:15 - 20:25]: Tomada de Tempo (Qualifying).
* [20:30 - 20:55]: Corrida.
* [21:00]: Pesagem final (obrigatória) e Pódio da Etapa.
§2º O comparecimento ao briefing é **obrigatório**. O piloto ausente poderá largar da última posição ou sofrer outras penalidades a critério da Direção de Prova/Organização.
§3º A ordem de entrada na pista para a tomada de tempo seguirá a ordem do sorteio dos karts ou outra definida no briefing.

**Art. 6º – BRIEFING**

§1º Serão abordadas as regras específicas da pista, procedimentos de largada, sinalização de bandeiras, regras de conduta e segurança, e esclarecimento de dúvidas sobre o regulamento.

**Art. 7º – TOMADA DE TEMPO (QUALIFYING)**

§1º Terá duração de [Ex: 5 a 10] minutos.
§2º O objetivo é registrar a volta mais rápida de cada piloto, que definirá a ordem do grid de largada para a corrida.
§3º Em caso de empate no tempo, o critério de desempate será a segunda volta mais rápida, e assim sucessivamente. Persistindo o empate, a ordem será definida por sorteio ou pela ordem de registro do tempo.

**Art. 8º – CORRIDA**

§1º Terá duração de [Ex: 20 a 25] minutos ou [Número] voltas.
§2º O grid de largada será formado com base nos tempos da Tomada de Tempo.
§3º A largada será [Definir: Lançada em fila dupla/única após volta de apresentação OU Parada no grid]. O procedimento exato será detalhado no briefing.
§4º **Bandeiras:** Os pilotos devem respeitar a sinalização das bandeiras:
* **Verde:** Pista livre / Início da prova.
* **Amarela:** Perigo à frente, proibido ultrapassar, reduza a velocidade. Agitada indica perigo imediato. Parada indica perigo localizado.
* **Azul:** Dê passagem a um piloto mais rápido que se aproxima (retardatário). Ignorar pode gerar penalidade.
* **Vermelha:** Interrupção imediata da sessão/corrida. Dirija-se lentamente aos boxes ou ao local indicado.
* **Preta:** Exclusão do piloto indicado (com número) da sessão/corrida. Dirija-se aos boxes imediatamente.
* **Preta com Círculo Laranja:** Problema mecânico no kart indicado (com número). Dirija-se aos boxes na próxima volta.
* **Branca:** Veículo lento na pista (ex: kart de serviço, ambulância).
* **Quadriculada:** Fim da sessão/corrida.
§5º **Conduta na Pista:**
* Ultrapassagens são permitidas, mas devem ser feitas com segurança e respeito ao adversário. A responsabilidade primária é do piloto que tenta a ultrapassagem.
* Manobras consideradas antidesportivas, como "fechar a porta" de forma perigosa, mudar de trajetória mais de uma vez em uma reta de defesa, ou causar colisões propositais ou por negligência, serão passíveis de punição.
* É proibido "queimar" a largada.
* É proibido trafegar na contramão ou cortar caminho.
* Respeitar os limites de pista demarcados.

**Art. 9º – LASTRO E PESAGEM**

§1º O peso mínimo definido no Art. 4º, §6º ([Ex: 90] kg) deve ser respeitado.
§2º A pesagem oficial será realizada [Definir: Imediatamente após a Tomada de Tempo e/ou imediatamente após a Corrida], com o piloto vestindo todo o seu equipamento de segurança (capacete, macacão/roupa, luvas, calçado).
§3º O piloto é responsável por conferir e ajustar seu lastro antes de entrar na pista. O lastro deve ser fixado corretamente no kart, nos locais designados.
§4º O piloto que for pesado abaixo do peso mínimo estabelecido após a Tomada de Tempo largará da última posição. Se pesado abaixo do mínimo após a Corrida, será desclassificado da etapa.

**Art. 10º – SISTEMA DE PONTUAÇÃO**

§1º A pontuação por etapa será distribuída da seguinte forma (Exemplo baseado na F1, pode ser ajustado):
* 1º lugar: 25 pontos
* 2º lugar: 18 pontos
* 3º lugar: 15 pontos
* 4º lugar: 12 pontos
* 5º lugar: 10 pontos
* 6º lugar: 8 pontos
* 7º lugar: 6 pontos
* 8º lugar: 4 pontos
* 9º lugar: 2 pontos
* 10º lugar: 1 ponto
§2º Pontos extras [Opcional]:
* Pole Position: [Ex: 1] ponto.
* Volta Mais Rápida da Corrida (entre os [Ex: 10] primeiros): [Ex: 1] ponto.
§3º Pilotos desclassificados (DSQ) na etapa não marcam pontos. Pilotos que não completarem a prova (DNF) mas cumprirem [Ex: 75%] das voltas do vencedor podem ser classificados e pontuar.
§4º Serão aplicados [Número] descarte(s) do(s) pior(es) resultado(s) no final do campeonato, antes da classificação final.

**Art. 11º – PENALIDADES**

§1º As penalidades serão aplicadas pela Direção de Prova (staff do kartódromo) e/ou pela Organização do Campeonato, com base na observação direta, análise de vídeo (se disponível) ou reclamações formais.
§2º Tipos de Penalidades (podem variar conforme a infração e o momento):
* **Advertência Verbal:** Para infrações leves.
* **Perda de Tempo:** Acréscimo de tempo (Ex: 5, 10, 15 segundos) ao tempo final da corrida. Aplicado geralmente para toques leves, ganhar vantagem saindo da pista, etc.
* **Drive Through (Simulado) / Stop & Go (Simulado):** Em campeonatos amadores, pode ser convertido em perda de tempo significativa ou perda de posições após a corrida, já que a parada nos boxes nem sempre é viável/segura.
* **Perda de Posições:** Perda de posições no resultado final da corrida.
* **Desclassificação da Etapa (DSQ):** Para infrações graves, como conduta antidesportiva grave, colocar outros em risco deliberadamente, estar abaixo do peso mínimo após a corrida, ignorar bandeira preta.
* **Exclusão do Campeonato:** Para reincidência de faltas graves ou atos que comprometam a integridade do evento.
§3º **Infrações Comuns Passíveis de Punição:**
* Toques e colisões consideradas evitáveis ou resultantes de manobra imprudente.
* Conduta antidesportiva (gestos ofensivos, xingamentos, agressões físicas ou verbais).
* Ignorar sinalização de bandeiras (especialmente azul e amarela).
* Ganhar vantagem por fora dos limites da pista.
* Queima de largada.
* Estar abaixo do peso mínimo.
§4º A decisão da Direção de Prova/Organização sobre penalidades é soberana naquela etapa, mas pode haver um comitê para análise posterior de lances polêmicos se a Organização assim definir.

**Art. 12º – CRITÉRIOS DE DESEMPATE**

§1º Em caso de empate na pontuação final do campeonato, os critérios de desempate serão aplicados na seguinte ordem:
1.  Maior número de vitórias.
2.  Maior número de segundos lugares.
3.  Maior número de terceiros lugares (e assim sucessivamente).
4.  Maior número de pole positions.
5.  Melhor resultado na última etapa disputada por ambos os empatados.
6.  Sorteio (como último recurso).

**Art. 13º – CUSTOS E INSCRIÇÃO**

§1º A taxa de inscrição por etapa será de R$ [Valor], a ser paga [Definir forma e prazo: antecipadamente via PIX/transferência, ou no dia do evento no check-in].
§2º O valor da inscrição inclui o aluguel do kart, o tempo de pista para tomada de tempo e corrida, e [se aplicável] premiação da etapa (troféus/medalhas). Não inclui equipamentos de segurança pessoal.
§3º [Opcional: Taxa de inscrição única para o campeonato com desconto].
§4º O não comparecimento a uma etapa para a qual o piloto se inscreveu [Definir política: não gera reembolso, gera crédito parcial, etc.].

**Art. 14º – DISPOSIÇÕES GERAIS**

§1º A Organização do Campeonato reserva-se o direito de alterar este regulamento a qualquer momento, visando a segurança, a justiça desportiva ou o bom andamento do evento, comunicando as alterações a todos os participantes com a devida antecedência.
§2º O kartismo é um esporte de risco. Os participantes assumem total responsabilidade por quaisquer acidentes, danos físicos ou materiais que possam ocorrer durante o evento, isentando a Organização e os kartódromos parceiros.
§3º Os participantes cedem o direito de uso de sua imagem (fotos, vídeos) para fins de divulgação do campeonato e de seus patrocinadores/apoiadores.
§4º Casos omissos neste regulamento serão resolvidos pela Comissão Organizadora do Campeonato, cujas decisões serão finais e irrecorríveis.

**Art. 15º – CONTATO DA ORGANIZAÇÃO**

* Nome do Responsável: [Nome]
* Telefone/WhatsApp: [Número]
* Email: [Endereço de Email]

Desejamos a todos um excelente campeonato, com muita diversão, respeito e velocidade!

[Local], [Data da Publicação do Regulamento].
`;

const regulamentoEnduranceFK2025 = `
**REGULAMENTO GERAL – CAMPEONATO DE KART AMADOR [NOME DO CAMPEONATO] [ANO]**

**PREÂMBULO**

Este regulamento estabelece as regras e diretrizes para a participação e condução do Campeonato de Kart Amador [Nome do Campeonato] [Ano]. O objetivo principal é promover a confraternização, o espírito esportivo, a competição justa e o acesso ao automobilismo de base através do kartismo amador. Todos os participantes, ao se inscreverem, declaram ter lido, compreendido e concordado com todos os termos deste regulamento.

**Art. 1º – OBJETIVO E ESPÍRITO DO CAMPEONATO**

§1º Promover a prática do kartismo amador de forma organizada e segura.
§2º Fomentar a amizade e o respeito entre os participantes.
§3º Incentivar a competição leal (*fair play*) e o espírito esportivo.

**Art. 2º – PARTICIPANTES E ELEGIBILIDADE**

§1º O campeonato é aberto a pilotos amadores, homens e mulheres, com idade mínima de [Ex: 16] anos completos na data da primeira etapa. Menores de 18 anos devem apresentar autorização dos pais ou responsáveis legais.
§2º Considera-se piloto amador aquele que não possua carteira profissional de piloto de kart ou automobilismo (nacional ou internacional) e que não tenha participado regularmente de campeonatos oficiais/federados nos últimos [Ex: 3] anos. Casos omissos serão analisados pela organização.
§3º A inscrição implica na aceitação integral deste regulamento e na assinatura de termo de responsabilidade (geralmente fornecido pelo kartódromo).

**Art. 3º – FORMATO DO CAMPEONATO**

§1º O campeonato será composto por [Número] etapas, realizadas nos seguintes kartódromos e datas (sujeito a alterações):
* Etapa 1: [Data] – [Kartódromo]
* Etapa 2: [Data] – [Kartódromo]
* ...
* Etapa [Número]: [Data] – [Kartódromo]
§2º Todas as etapas serão válidas para a pontuação final do campeonato.
§3º Haverá [Número] descarte(s) do(s) pior(es) resultado(s) para a classificação final. A etapa de encerramento [ou especificar quais] poderá ter pontuação dobrada [ou diferente] e/ou não permitir descarte.

**Art. 4º – EQUIPAMENTO E KARTS**

§1º Serão utilizados os karts fornecidos pelos kartódromos parceiros (modalidade Rental Kart). Não é permitida nenhuma modificação mecânica nos karts por parte dos pilotos ou equipes.
§2º A distribuição dos karts entre os pilotos será feita por sorteio antes do início da tomada de tempo de cada etapa, na presença dos participantes ou seus representantes.
§3º **Equipamento de Segurança Obrigatório:** É de responsabilidade de cada piloto providenciar e utilizar:
* Capacete com viseira (fechado ou aberto com óculos de proteção).
* Macacão apropriado para kartismo ou calça comprida e jaqueta/blusa de manga comprida (material resistente, não inflamável – Jeans grosso é geralmente aceito, Nylon fino não).
* Luvas que cubram completamente as mãos e punhos.
* Calçado fechado (tênis são adequados). Sapatilhas de pilotagem são recomendadas.
* Balaclava (recomendado por higiene).
§4º **Equipamento de Segurança Recomendado:** Protetor de pescoço e protetor de costelas.
§5º A organização e/ou a direção de prova do kartódromo podem impedir a participação do piloto que não estiver utilizando o equipamento de segurança adequado.
§6º **Lastro:** Será adotado um sistema de lastreamento para equalizar o peso dos pilotos. O peso mínimo do conjunto piloto + equipamento + lastro será definido em [Ex: 85, 90, 95] kg. A pesagem oficial ocorrerá [Definir momento: antes da classificação? Após a corrida? Ambos?]. Lastros serão fornecidos pelo kartódromo ou pela organização, conforme disponibilidade e regras locais.

**Art. 5º – PROCEDIMENTOS DE ETAPA**

§1º O cronograma padrão de cada etapa será (horários são exemplos e devem ser definidos):
* [19:00 - 19:30]: Chegada dos pilotos, confirmação de presença (check-in) e pagamento.
* [19:30 - 19:50]: Pesagem inicial (se aplicável) e sorteio dos karts.
* [19:50 - 20:10]: Briefing obrigatório com Diretor de Prova.
* [20:15 - 20:25]: Tomada de Tempo (Qualifying).
* [20:30 - 20:55]: Corrida.
* [21:00]: Pesagem final (obrigatória) e Pódio da Etapa.
§2º O comparecimento ao briefing é **obrigatório**. O piloto ausente poderá largar da última posição ou sofrer outras penalidades a critério da Direção de Prova/Organização.
§3º A ordem de entrada na pista para a tomada de tempo seguirá a ordem do sorteio dos karts ou outra definida no briefing.

**Art. 6º – BRIEFING**

§1º Serão abordadas as regras específicas da pista, procedimentos de largada, sinalização de bandeiras, regras de conduta e segurança, e esclarecimento de dúvidas sobre o regulamento.

**Art. 7º – TOMADA DE TEMPO (QUALIFYING)**

§1º Terá duração de [Ex: 5 a 10] minutos.
§2º O objetivo é registrar a volta mais rápida de cada piloto, que definirá a ordem do grid de largada para a corrida.
§3º Em caso de empate no tempo, o critério de desempate será a segunda volta mais rápida, e assim sucessivamente. Persistindo o empate, a ordem será definida por sorteio ou pela ordem de registro do tempo.

**Art. 8º – CORRIDA**

§1º Terá duração de [Ex: 20 a 25] minutos ou [Número] voltas.
§2º O grid de largada será formado com base nos tempos da Tomada de Tempo.
§3º A largada será [Definir: Lançada em fila dupla/única após volta de apresentação OU Parada no grid]. O procedimento exato será detalhado no briefing.
§4º **Bandeiras:** Os pilotos devem respeitar a sinalização das bandeiras:
* **Verde:** Pista livre / Início da prova.
* **Amarela:** Perigo à frente, proibido ultrapassar, reduza a velocidade. Agitada indica perigo imediato. Parada indica perigo localizado.
* **Azul:** Dê passagem a um piloto mais rápido que se aproxima (retardatário). Ignorar pode gerar penalidade.
* **Vermelha:** Interrupção imediata da sessão/corrida. Dirija-se lentamente aos boxes ou ao local indicado.
* **Preta:** Exclusão do piloto indicado (com número) da sessão/corrida. Dirija-se aos boxes imediatamente.
* **Preta com Círculo Laranja:** Problema mecânico no kart indicado (com número). Dirija-se aos boxes na próxima volta.
* **Branca:** Veículo lento na pista (ex: kart de serviço, ambulância).
* **Quadriculada:** Fim da sessão/corrida.
§5º **Conduta na Pista:**
* Ultrapassagens são permitidas, mas devem ser feitas com segurança e respeito ao adversário. A responsabilidade primária é do piloto que tenta a ultrapassagem.
* Manobras consideradas antidesportivas, como "fechar a porta" de forma perigosa, mudar de trajetória mais de uma vez em uma reta de defesa, ou causar colisões propositais ou por negligência, serão passíveis de punição.
* É proibido "queimar" a largada.
* É proibido trafegar na contramão ou cortar caminho.
* Respeitar os limites de pista demarcados.

**Art. 9º – LASTRO E PESAGEM**

§1º O peso mínimo definido no Art. 4º, §6º ([Ex: 90] kg) deve ser respeitado.
§2º A pesagem oficial será realizada [Definir: Imediatamente após a Tomada de Tempo e/ou imediatamente após a Corrida], com o piloto vestindo todo o seu equipamento de segurança (capacete, macacão/roupa, luvas, calçado).
§3º O piloto é responsável por conferir e ajustar seu lastro antes de entrar na pista. O lastro deve ser fixado corretamente no kart, nos locais designados.
§4º O piloto que for pesado abaixo do peso mínimo estabelecido após a Tomada de Tempo largará da última posição. Se pesado abaixo do mínimo após a Corrida, será desclassificado da etapa.

**Art. 10º – SISTEMA DE PONTUAÇÃO**

§1º A pontuação por etapa será distribuída da seguinte forma (Exemplo baseado na F1, pode ser ajustado):
* 1º lugar: 25 pontos
* 2º lugar: 18 pontos
* 3º lugar: 15 pontos
* 4º lugar: 12 pontos
* 5º lugar: 10 pontos
* 6º lugar: 8 pontos
* 7º lugar: 6 pontos
* 8º lugar: 4 pontos
* 9º lugar: 2 pontos
* 10º lugar: 1 ponto
§2º Pontos extras [Opcional]:
* Pole Position: [Ex: 1] ponto.
* Volta Mais Rápida da Corrida (entre os [Ex: 10] primeiros): [Ex: 1] ponto.
§3º Pilotos desclassificados (DSQ) na etapa não marcam pontos. Pilotos que não completarem a prova (DNF) mas cumprirem [Ex: 75%] das voltas do vencedor podem ser classificados e pontuar.
§4º Serão aplicados [Número] descarte(s) do(s) pior(es) resultado(s) no final do campeonato, antes da classificação final.

**Art. 11º – PENALIDADES**

§1º As penalidades serão aplicadas pela Direção de Prova (staff do kartódromo) e/ou pela Organização do Campeonato, com base na observação direta, análise de vídeo (se disponível) ou reclamações formais.
§2º Tipos de Penalidades (podem variar conforme a infração e o momento):
* **Advertência Verbal:** Para infrações leves.
* **Perda de Tempo:** Acréscimo de tempo (Ex: 5, 10, 15 segundos) ao tempo final da corrida. Aplicado geralmente para toques leves, ganhar vantagem saindo da pista, etc.
* **Drive Through (Simulado) / Stop & Go (Simulado):** Em campeonatos amadores, pode ser convertido em perda de tempo significativa ou perda de posições após a corrida, já que a parada nos boxes nem sempre é viável/segura.
* **Perda de Posições:** Perda de posições no resultado final da corrida.
* **Desclassificação da Etapa (DSQ):** Para infrações graves, como conduta antidesportiva grave, colocar outros em risco deliberadamente, estar abaixo do peso mínimo após a corrida, ignorar bandeira preta.
* **Exclusão do Campeonato:** Para reincidência de faltas graves ou atos que comprometam a integridade do evento.
§3º **Infrações Comuns Passíveis de Punição:**
* Toques e colisões consideradas evitáveis ou resultantes de manobra imprudente.
* Conduta antidesportiva (gestos ofensivos, xingamentos, agressões físicas ou verbais).
* Ignorar sinalização de bandeiras (especialmente azul e amarela).
* Ganhar vantagem por fora dos limites da pista.
* Queima de largada.
* Estar abaixo do peso mínimo.
§4º A decisão da Direção de Prova/Organização sobre penalidades é soberana naquela etapa, mas pode haver um comitê para análise posterior de lances polêmicos se a Organização assim definir.

**Art. 12º – CRITÉRIOS DE DESEMPATE**

§1º Em caso de empate na pontuação final do campeonato, os critérios de desempate serão aplicados na seguinte ordem:
1.  Maior número de vitórias.
2.  Maior número de segundos lugares.
3.  Maior número de terceiros lugares (e assim sucessivamente).
4.  Maior número de pole positions.
5.  Melhor resultado na última etapa disputada por ambos os empatados.
6.  Sorteio (como último recurso).

**Art. 13º – CUSTOS E INSCRIÇÃO**

§1º A taxa de inscrição por etapa será de R$ [Valor], a ser paga [Definir forma e prazo: antecipadamente via PIX/transferência, ou no dia do evento no check-in].
§2º O valor da inscrição inclui o aluguel do kart, o tempo de pista para tomada de tempo e corrida, e [se aplicável] premiação da etapa (troféus/medalhas). Não inclui equipamentos de segurança pessoal.
§3º [Opcional: Taxa de inscrição única para o campeonato com desconto].
§4º O não comparecimento a uma etapa para a qual o piloto se inscreveu [Definir política: não gera reembolso, gera crédito parcial, etc.].

**Art. 14º – DISPOSIÇÕES GERAIS**

§1º A Organização do Campeonato reserva-se o direito de alterar este regulamento a qualquer momento, visando a segurança, a justiça desportiva ou o bom andamento do evento, comunicando as alterações a todos os participantes com a devida antecedência.
§2º O kartismo é um esporte de risco. Os participantes assumem total responsabilidade por quaisquer acidentes, danos físicos ou materiais que possam ocorrer durante o evento, isentando a Organização e os kartódromos parceiros.
§3º Os participantes cedem o direito de uso de sua imagem (fotos, vídeos) para fins de divulgação do campeonato e de seus patrocinadores/apoiadores.
§4º Casos omissos neste regulamento serão resolvidos pela Comissão Organizadora do Campeonato, cujas decisões serão finais e irrecorríveis.

**Art. 15º – CONTATO DA ORGANIZAÇÃO**

* Nome do Responsável: [Nome]
* Telefone/WhatsApp: [Número]
* Email: [Endereço de Email]

Desejamos a todos um excelente campeonato, com muita diversão, respeito e velocidade!

[Local], [Data da Publicação do Regulamento].
`;



export const championshipsData: Championship[] = [
  // --- Campeonatos KGV ---
  {
    id: 'copa-kgv-25',
    year: YEAR,
    name: `Copa KGV ${YEAR}`,
    description: `Tradicional copa de velocidade realizada no Kartódromo Granja Viana (${YEAR}).`,
    imageUrl: 'images/kartodromos/kgv/panoramica.png', // Exemplo - Crie a imagem e coloque em /public
    kartodromo: 'Kartódromo Granja Viana',
    location: 'Cotia, SP',
    kartodromoLogoUrl: '/images/kartodromos/kgv/logo.png', // Exemplo - Verifique se existe em /public
    stages: 8, // Contado a partir dos eventos 'copa-kgv-25' em calendarEventsData (Fev a Nov + QDay)
    categories: [
      { id: 'copa-kgv-light-25', name: 'Light', ballast: '90kg', pricePerStage: 230 },
      { id: 'copa-kgv-beginner-25', name: 'Beginner', ballast: '90kg', pricePerStage: 230 },
      { id: 'copa-kgv-master-25', name: 'Master', ballast: '95kg', pricePerStage: 230 },
      // Preço convidado (R$195) e 2 corridas (R$420) precisam ser tratados na lógica de inscrição/pagamento,
      // não cabem diretamente aqui como categoria separada de preço fixo.
    ],
    regulationsContent: `# Regulamento Copa KGV ${YEAR}\n\n(Conteúdo completo do regulamento aqui...) \n\n**Valores:**\n- R$ 230,00 Uma corrida\n- R$ 420,00 Duas corridas\n- R$ 195,00 Convidados (sem premiação)`,
  },
  {
    id: 'oldschool-acka-25',
    year: YEAR,
    name: `Old School / Desafio ACKA ${YEAR}`,
    description: `Eventos noturnos quinzenais no KGV com foco na experiência Pilotech (${YEAR}).`,
    imageUrl: 'images/kartodromos/kgv/panoramica.png', // Exemplo
    kartodromo: 'Kartódromo Granja Viana',
    location: 'Cotia, SP',
    kartodromoLogoUrl: '/images/kartodromos/kgv/logo.png',
    stages: 9, // Contado a partir dos eventos 'oldschool-acka-25'
    categories: [
      { id: 'oldschool-acka-cat-25', name: 'Geral', ballast: '95kg', pricePerStage: 230 },
      // O preço de convidado (R$200) também seria tratado na inscrição.
    ],
    regulationsContent: `# Regulamento Old School / Desafio ACKA ${YEAR}\n\n(Conteúdo completo do regulamento aqui...)\n\n**Valores:**\n- R$ 230,00\n- Convidado (sem premiação): R$ 200,00\n\n**Desafio ACKA Pilotech:**\n- Challenger 1: R$ 265,00\n- Challenger 2: R$ 240,00`,
  },
  {
    id: 'endurance-kgv-25',
    year: YEAR,
    name: `Endurance KGV ${YEAR}`,
    description: `Provas de longa duração no Kartódromo Granja Viana (${YEAR}).`,
    imageUrl: 'images/kartodromos/kgv/panoramica.png', // Exemplo
    kartodromo: 'Kartódromo Granja Viana',
    location: 'Cotia, SP',
    kartodromoLogoUrl: '/images/kartodromos/kgv/logo.png',
    stages: 3, // Contado a partir dos eventos 'endurance-kgv-25'
    categories: [
      // Nenhuma categoria específica foi mencionada para Endurance KGV no texto
      { id: 'endurance-kgv-geral-25', name: 'Equipes (Geral)', ballast: 'Não especificado', pricePerStage: undefined },
    ],
    regulationsContent: `# Regulamento Endurance KGV ${YEAR}\n\n(Conteúdo completo do regulamento aqui...)`,
  },
   {
    id: '500-milhas-kgv-25',
    year: YEAR,
    name: `500 Milhas KGV ${YEAR}`,
    description: `Tradicional prova de 500 milhas no Kartódromo Granja Viana (${YEAR}).`,
    imageUrl: 'images/kartodromos/kgv/panoramica.png', // Exemplo
    kartodromo: 'Kartódromo Granja Viana',
    location: 'Cotia, SP',
    kartodromoLogoUrl: '/images/kartodromos/kgv/logo.png',
    stages: 2, // Contado a partir dos eventos '500-milhas-kgv-25' (Normal e Pro)
    categories: [
      { id: '500-milhas-geral-25', name: 'Geral / Pro', ballast: 'Não especificado', pricePerStage: undefined },
    ],
    regulationsContent: `# Regulamento 500 Milhas KGV ${YEAR}\n\n(Conteúdo completo do regulamento aqui...)`,
  },

  // --- Campeonatos San Marino ---
  {
    id: 'sm-series-25',
    year: YEAR,
    name: `San Marino Series ${YEAR}`,
    description: `Série completa de eventos variados no Kartódromo San Marino (${YEAR}), incluindo Night Race, Race Day, Endurance e mais.`,
    imageUrl: '/images/kartodromos/san-marino/panoramica.png', // Exemplo
    kartodromo: 'Kartódromo San Marino',
    location: 'Paulínia, SP',
    kartodromoLogoUrl: 'images/kartodromos/san-marino/logo.png', // Exemplo - Crie e adicione
    stages: 33, // Contado a partir dos eventos 'sm-series-25' (Fev a Nov)
    categories: [
      // Nenhuma categoria específica foi mencionada para a série toda
      { id: 'sm-geral-25', name: 'Geral', ballast: 'Não especificado', pricePerStage: undefined },
    ],
    regulationsContent: `# Regulamento San Marino Series ${YEAR}\n\n(Conteúdo completo do regulamento aqui...)`,
  },

  // --- Campeonatos Itu ---
  {
    id: 'copa-itu-geral-25',
    year: YEAR,
    name: `Copa Itu ${YEAR}`,
    description: `Campeonato principal realizado no Kartódromo de Itu (${YEAR}).`,
    imageUrl: 'images/kartodromos/itu/panoramica.png', // Exemplo
    kartodromo: 'Kartódromo de Itu', // Arena Itu? Verificar nome oficial
    location: 'Itu, SP',
    kartodromoLogoUrl: '/images/kartodromos/itu/logo.png', // Exemplo - Crie e adicione
    stages: 7, // Contado a partir dos eventos 'copa-itu-geral-25'
    categories: [
      // Categoria Elite/Convidados mencionada em 'Copa Itu Kids', aplicar aqui também?
      // Vamos assumir que sim para ter algo, mas precisa confirmar.
       { id: 'itu-geral-elite-25', name: 'Elite', ballast: '80kg', pricePerStage: undefined }, // Preço não claro para geral
       { id: 'itu-geral-convidado-25', name: 'Convidados', ballast: '95kg', pricePerStage: 195 },
    ],
    regulationsContent: `# Regulamento Copa Itu ${YEAR}\n\n(Conteúdo completo do regulamento aqui...)`,
  },
  {
    id: 'copa-itu-kids-25',
    year: YEAR,
    name: `Copa Itu Kids ${YEAR}`,
    description: `Eventos e treinos voltados para o público infantil e juvenil no Kartódromo de Itu (${YEAR}).`,
    imageUrl: 'images/kartodromos/itu/panoramica.png', // Exemplo
    kartodromo: 'Kartódromo de Itu', // Arena Itu? Verificar nome oficial
    location: 'Itu, SP',
    kartodromoLogoUrl: 'images/kartodromos/itu/logo.png',
    stages: 3, // Contado a partir dos eventos 'copa-itu-kids-25' (Abertura, Pais, Endurance Pais) - verificar se é isso mesmo
    categories: [
       // Os valores parecem misturar inscrição/curso com preço de corrida
       // Separando o que parece ser categoria de corrida:
       { id: 'itu-kids-6-12-25', name: 'Kids (6-12 anos)', ballast: 'Não aplicável', pricePerStage: 275 }, // Assumindo R$275,00 por evento/corrida
       { id: 'itu-kids-13-17-25', name: 'Junior (13-17 anos)', ballast: 'Não aplicável', pricePerStage: 240 },
       { id: 'itu-kids-pais-25', name: 'Pais/Convidados', ballast: '95kg', pricePerStage: 195 }, // Incluindo pais aqui
       // A categoria 'Elite 80kg' do texto Markdown parece mais ligada à Copa Itu Geral
       // O curso de R$90 é separado.
    ],
    regulationsContent: `# Regulamento Copa Itu Kids ${YEAR}\n\n(Conteúdo completo do regulamento aqui...)\n\n**Valores Adicionais:**\n- Curso iniciante: R$ 90,00`,
  },

];

// Função getChampionshipById (Mantida para a página de detalhes)
export const getChampionshipById = (id: string): Championship | undefined => {
  // Pode precisar ajustar para buscar no array championshipsMock se ele for a fonte única
  return championshipsData.find(champ => champ.id === id);
}