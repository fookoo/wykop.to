import { IArticlePost } from './content.type'
import { IComment } from '../../pages/post/components/comments/components/comment/comment.component'

export const mockContent: IArticlePost[] = [
  {
    id: 'news-0',
    title: 'Jak działa Tinder w Kolumbii? Dziewczyna z Bogoty',
    description: 'wykop market'
  },
  {
    id: 'news-1',
    title: 'Wsparcie Berlina kończy się na słowach? Ambasador Ukrainy nie szczędził...',
    description: 'wykopowe urwisko'
  },
  {
    id: 'news-2',
    title: 'Płonie kolejna baza wojskowa w Rosji',
    description: 'wykopowe urwisko',
    tags: ['tag-polityka', 'tag-rosja', 'tag-wojna']
  },
  {
    id: 'news-3',
    title: 'Wielka Brytania: 99% przypadków małpiej ospy, to osoby LGBT',
    description:
      '10.06.2022. Agencja Bezpieczeństwa Zdrowia: Ankieta wśród osób zakażonych, które zgodziły się na wywiad epidemiologiczny wykazała, iż 99% przypadków małpiej ospy to osoby określające się jako “geje, biseksualiści lub mężczyźni uprawiający seks z mężczyznami (...)” (GBMSM). Mediana wieku to 38 lat.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1655023550bmnKF2tFul8cnSDWzBo33N,w207h139.jpg'
  },
  {
    id: 'news-4',
    title: 'Analiza akcji #blokujemyorlen',
    description: 'Co wspólnego mają z tym antyszczepionkowcy',
    img: 'https://www.wykop.pl/cdn/c728492/paylink_17489_xGzCRNatOUZN.png',
    tags: ['tag-polityka', 'tag-orlen', 'tag-wojna']
  },
  {
    id: 'news-5',
    title: 'Rosyjskie samoloty wojskowe stworzyły zagrożenie nad Bałtykiem',
    description:
      'Trzy rosyjskie samoloty dokonały w czwartek niewidzialnego dla radarów przelotu nad Bałtykiem na północ od lotniska w Visby na Gotlandii. Maszyny stworzyły zagrożenie dla lotnictwa cywilnego — pisze w sobotę dziennik "Dagens Nyheter".',
    img: 'https://www.wykop.pl/cdn/c3397993/link_16549674573pfyDe2wat5o7nRtZCecI7,w207h139.jpg'
  },
  {
    id: 'news-6',
    title: 'Żona dostała ataku szajby przy mężu, który ją przyłapał na zdradzie.',
    description:
      'Tak się zachowuje silna dojrzała kobieta, która została przyłapana przez swojego męża na zdradzie. Czy jest na sali psychiatra?',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654994617NOMdEz4DbsGenOjl1gsIe4,w207h139.jpg'
  },
  {
    id: 'news-7',
    title: 'Strefa Czystego Transportu w Krakowie. Jest plan z rozmachem',
    description:
      'To już nie jest zabawne. Ekoświry uzyskały ogromny wpływ na politykę, a plany mają dość śmiałe, np. zamknięcie ogromnej części Krakowa dla większości samochodów.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654968724EgpyZn0tZI2GhnJjYqT60M,w207h139.jpg',
    tags: ['tag-krakow']
  },
  {
    id: 'news-8',
    title: 'Wyjący od 2 tygodni alarm na osiedlu w Rzeszowie. Można posłuchać.',
    description:
      'Na osiedlu Grota-Roweckiego włączył się alarm. Słychać go od kilkunastu dni. Miejskie służby na razie nie są w stanie pomóc.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654972618eDoB3srVzIN7oWdRrO73Vg,w207h139.jpg'
  },
  {
    id: 'news-9',
    title: 'Gazetka Biedronki z 1999 roku',
    description: 'Wtedy pensja minimalna do listopada wynosiła 528 zł brutto',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654973698ts7qgsJWBK63oHUiBvfssG,w207h139.jpg',
    tags: ['tag-inflacja']
  },
  {
    id: 'news-10',
    title: 'Wystąpienie organizatora protestów #BlokujemyOrlen w Tomaszowie Maz.',
    description:
      'Półgodzinne nagranie wystąpienia osoby, która zorganizowała protest #BlokujemyOrlen w swoim rodzinnym mieście.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654980841ciihOe9Fg7N1wVGFDyoBZ0,w207h139.jpg'
  },
  {
    id: 'news-11',
    title: 'Sikorski: "Zachód ma prawo dać Ukrainie głowice nuklearne"',
    description:
      '- Rosja naruszyła memorandum (budapeszteńskie) i dlatego Zachód może dać Ukrainie możliwość obrony jej niepodległości — powiedział Radosław Sikorski. Nagranie z fragmentem wypowiedzi polskiego polityka opublikował portal Nexta.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1655023304FSOomSb1z281n7dcabQnXD,w207h139.jpg'
  },
  {
    id: 'news-12',
    title: 'Liga Narodów: Holandia - Polska 2:2',
    description:
      'Reprezentacja Polski zremisowała na wyjeździe z Holandią 2:2 (1:0) w meczu 3. kolejki Ligi Narodów. Biało-czerwoni prowadzili dwoma golami, ale roztrwonili przewagę. W końcówce gospodarze zmarnowali rzut karny. Zespół Czesława Michniewicza podniósł się po klęsce z Belgią.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654979853raNusDXLpKSGqq3GyPSmQJ,w207h139.jpg',
    tags: ['tag-sport']
  },
  {
    id: 'news-13',
    title: 'Norwegia odsyła śmigłowce wojskowe i żąda zwrotu pieniędzy od Francji',
    description:
      'Norwegia odeśle do Francji śmigłowce wojskowe NH90 zamówione w NH Industries. Żąda też zwrotu 490 mln dolarów oraz odsetek. Dlaczego?',
    img: 'https://www.wykop.pl/cdn/c728492/paylink_17479_rWPlYTjsgTE3.jpg',
    tags: ['tag-europa']
  },
  {
    id: 'news-14',
    title: '15-latek z Polski zabity w Manchesterze. Zginął broniąc matki przed nożownikiem',
    description:
      '15-letni Jakub Szymański z Manchesteru zmarł w wyniku ran, których doznał, próbując ratować swoją matkę, gdy ta została zaatakowana przez mężczyznę uzbrojonego w nóż — podał dziennik "Manchester Evening News".',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654985372PmG7REfveDYXxyqvNRUoME,w207h139.jpg'
  },
  {
    id: 'news-15',
    title: 'W Sewerodoniecku uliczne walki ciagle trwaja',
    description:
      'Miasto czesciami przechodzi z rak do rak w jedna i druga strone. Filmik z walk na dachach blokow.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654980139gPAZGg0EWgFaGkWX6AF1xA,w207h139.jpg',
    tags: ['tag-rosja', 'tag-wojna']
  },
  {
    id: 'news-16',
    title: 'Rybus zostaje w Rosji. Podpisał kontrakt ze Spartakiem.',
    description:
      '(...) My chcieliśmy uniknąć zamieszania wokół niego. Jeśli wyjaśni się sytuacja Rosji z Ukrainą, to we wrześniu na niego liczę - powiedział w maju Michniewicz.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654963805bTLITV8xsKMfWfBH63VXuc,w207h139.jpg',
    tags: ['tag-rosja', 'tag-sport']
  },
  {
    id: 'news-17',
    title: 'Dr Łuczaj ostrzega, nie sadźcie tych roślin!',
    description: 'wysokie ryzyko inwazji nowych gatunków',
    img: 'https://www.wykop.pl/cdn/c3397993/link_16549784411ptIUOZaDJrX3HY2a673Qu,w207h139.jpg'
  },
  {
    id: 'news-19',
    title: 'Gdynia: Mieszkańcy mogą dostać 2500 zł na zakup roweru elektrycznego',
    description:
      'Gdynia jako pierwsza gmina w Polsce dopłaci niektórym mieszkańcom do zakupu roweru elektrycznego. Pilotażowy program ruszył w piątek. Dotacji jest 40, zgłosiło się 700 osób. - Program będzie kontynuowany, bo chcemy, by gdynianie zostawiali auta...',
    img: 'https://www.wykop.pl/cdn/c3397993/link_16549510973OMRnUO8FOjVOqLMtRpsAb,w207h139.jpg'
  },
  {
    id: 'news-20',
    title: 'Afera w Pacanowie. Jest zawiadomienie do prokuratury. "Dymisja to za mało"',
    description:
      'Poseł Lewicy Andrzej Szejna złożył do prokuratury zawiadomienie o podejrzeniu popełnienia przestępstwa przez byłego ministra Michała Cieślaka.Chodzi o skargę złożoną na naczelniczkę poczty w Pacanowie.Cieślak domagał się wyciągnięcia wobec niej konsekwencji po tym, jak poskarżyła się mu na drożyznę.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654965291EJ7t29GyAdfSyphIPRzefO,w207h139.jpg'
  },
  {
    id: 'news-21',
    title: 'Nieoficjalnie: Scholz, Macron i Draghi pojadą do Kijowa',
    description:
      'Kanclerz Niemiec Olaf Scholz planuje udać się do Kijowa. We wspólnej podróży mają wziąć udział także prezydent Francji Emmanuel Macron i premier Włoch Mario Draghi Według informacji gazety wizyta ma się odbyć jeszcze przed szczytem grupy państw G7, który jest planowany na 26-28 czerwca.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654974386Qtlqf9N7G6CzNj8tL3mG35,w207h139.jpg'
  },
  {
    id: 'news-22',
    title: 'Widownia telewizji spada i starzeje się, coraz mniejszy dzienny czas...',
    description:
      'Średnia widownia telewizji linearnej w 2021 roku wyniosła 6,15 mln osób, o 350 tys. widzów mniej niż rok wcześniej. W strukturze widowni tego medium coraz większy udział mają osoby starsze, ale w każdej grupie wiekowej topnieje średni czas oglądania.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654932560KYTiz6t0zAzwe8wQmVxMTw,w207h139.jpg'
  },
  {
    id: 'news-23',
    title: 'Plany odsyłania nielegalnych imigrantów do Rwandy.',
    description:
      'Brytyjski książę Karol nazwał w prywatnej rozmowie rządowe plany wysyłania nielegalnych imigrantów do Rwandy "zatrważającymi" - ujawnił dziennik "The Times". Pierwszy lot deportacyjny ma się odbyć w najbliższy wtorek.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654942337R1yTEdRaOTM8335Et3vVbi,w207h139.jpg'
  },
  {
    id: 'news-24',
    title: 'Jadłbym( ͡~ ͜ʖ ͡°)(ง ͡ʘ ͜ʖ ͡ʘ)ง',
    description:
      'Restauracja "Abi Doner" w Uzbekistanie. Tutaj gotuje się około 124 kg mięsa dziennie na Shawarmę. Ta turecka kuchnia wyróżnia się również pieczywem. Doner w Uzbekistanie | Kuchnia turecka',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654947385KtoTYDy04JLbJ9p7djhcn0,w207h139.jpg'
  },
  {
    id: 'news-25',
    title: 'Rosyjski żołnierz do matki: Zostaliśmy dawno sprzedani',
    description:
      'Grupę 20 naszych żołnierzy wysyłają do walki przeciwko całemu batalionowi wojsk ukraińskich, wszyscy zginiemy - mówi rosyjski żołnierz do swojej matki w rozmowie przechwyconej przez ukraiński wywiad wojskowy (HUR).',
    img: 'https://www.wykop.pl/cdn/c3397993/link_16549471403zaOBOIg0UMTKbyYET3wOl,w207h139.jpg'
  },
  {
    id: 'news-26',
    title: 'Rosyjski ekonomista: Putinowi nigdy nie skończą się pieniądze na wojnę',
    description:
      '- Do końca roku rosyjska gospodarka upadnie. I co z tego? Ten, kto liczy, że zubożenie społeczeństwa spowoduje protesty, nic nie wie o Rosji. Putin ma dość zasobów, ludzie siedzą cicho, więc wojna będzie',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654957417Ygst76Ca6NGLAXB16XOSuq,w207h139.jpg'
  },
  {
    id: 'news-27',
    title: 'SZOPY PRACZE Podbijają Polskę',
    description: 'Czym To Grozi?',
    img: 'https://www.wykop.pl/cdn/c3397993/link_16549543578oMadWe2QIPG5jFEkkzWSS,w207h139.jpg'
  },
  {
    id: 'news-28',
    title: 'Tom Cooper: Wojna wchodzi w fazę przesilenia',
    description:
      'Ukraina utrzymuje się na kluczowych pozycjach, dokonała kilku nieznacznych kontrataków. Strona rosyjska atakuje bez większego powodzenia. Mówi o wielu sukcesach, ale nie przedstawia żadnych dowodów na nie. To już jest początek przesilenia, po którym inicjatywa przejdzie na stronę Ukrainy.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654981362tYpjEb3ikMmAHbryGjgPOF,w207h139.jpg'
  },
  {
    id: 'news-29',
    title: 'Kaczyński o starcie Kukiza z list Zjednoczonej Prawicy: "Jesteśmy po słowie"',
    description:
      '"Już jesteśmy po słowie. Zatem na dziś mogę powiedzieć wprost, że są takie ustalenia". Dopytywany, "dlaczego tylko na dziś" powiedział: "Bardzo lubię Pawła Kukiza, naprawdę. Ale to nie jest tylko polityk, ale też artysta. Choć na razie na współpracę nie narzekam" - Jarosław Kaczyński dla "GP".',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654945308WPTorGcWHW1RPK36IGbkFQ,w207h139.jpg'
  },
  {
    id: 'news-30',
    title: 'PiS szykuje się na brak pieniędzy z Unii. "Zaczęło się szczucie na Brukselę"',
    description:
      'Po tym, jak Zjednoczona Prawica odrzuciła w Sejmie wszystkie senackie poprawki do prezydenckiego projektu ustawy o SN, szanse na to, że Bruksela odblokuje dla Polski fundusze w ramach KPO, stały się znikome. Ustawa w obecnym kształcie zakłada jedynie pozorną likwidację Izby Dyscyplinarnej…',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654970904J5O7MKtQsItHHeqKN8vcdD,w207h139.jpg'
  },
  {
    id: 'news-31',
    title: 'Youtuber proponował influencerom, by reklamowali wymyślony przez niego produkt',
    description:
      'Wojtek Przeździecki, polski youtuber, znany w sieci jako OjWojtek, wysłał do stu influencerów propozycję reklamowania wkładek, które nie istnieją. Kilka osób nie odmówiło i przyznało wprost, że polecają rzeczy, których nigdy wcześniej nie używali.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1655011532PxRFWyYaStfxCa4Zv1FUsX,w207h139.jpg'
  },
  {
    id: 'news-32',
    title: 'Niemcy blokują wysyłkę Hiszpani 40 czołgów Leopard 2 na Ukrainę',
    description:
      'Wykopki śmieszkowali tydzień temu, że zaraz Niemcy zablokują Hiszpanom wysyłkę czołgów, no i wykrakaliście.',
    img: 'https://www.wykop.pl/cdn/c2526412/no-picture,w207h139.jpg'
  },
  {
    id: 'news-33',
    title: 'Policja szuka tego mężczyzny. Rozpoznajesz go?',
    description:
      'Opolska policja opublikowała portret pamięciowy mężczyzny, który miał dokonać rozboju w Strzelcach Opolskich. Funkcjonariusze proszą o kontakt wszystkich, którzy rozpoznają poszukiwanego.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654964130garnOFx133p5aO3mwUWDEi,w207h139.jpg'
  },
  {
    id: 'news-34',
    title: 'Pierwszy czeski żołnierz-ochotnik zginął na Ukrainie',
    description:
      'Republika Czeska poinformowała, że obywatel Czech, który zgłosił się na ochotnika do wstąpienia do armii ukraińskiej, aby pomóc temu krajowi w odparciu rosyjskiej inwazji, zginął w akcji.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654965551lW027kJfF5FI8rr4unmESJ,w207h139.jpg'
  },
  {
    id: 'news-35',
    title: 'Były wiceprezes Gazprombanku Igor Volobuev wstąpił do legionu Wolności Rosji.',
    description:
      'staje po stronie Ukrainy. Nawet jeśli nie podczas walk to choć propagandowo osłabi tym rosję',
    img: 'https://www.wykop.pl/cdn/c3397993/link_16549792964xldkbAkaXAIvSZDmti3cy,w207h139.jpg'
  },
  {
    id: 'news-36',
    title: 'Legenda czołgu Tygrys kontra rzeczywistość',
    description:
      'Panzerkampfwagen VI Tiger, potocznie nazywany Tygrysem, to legendarny i prawdopodobnie najbardziej znany czołg II wojny światowej. Na ile koncepcja ciężkiego, elitarnego czołgu sprawdziła się na polu walki? Jaka była prawdziwa cena użycia Tigerów? Czego nie mówią niemieckie statystyki?',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654959537JMtkq8jcU39D6xws9WU8KO,w207h139.jpg'
  },
  {
    id: 'news-37',
    title: 'Sukces Ukraińców. Rozbili elitarny oddział',
    description:
      'Grupę rosyjskich spadochroniarzy i 11 jednostek sprzętu zlikwidowano podczas walk w ostatnich 24 godzinach na południu Ukrainy - przekazał sztab sił Kijowa. Zaznaczono, że straty Rosjan to 39 żołnierzy.',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654921992dwteayUYfiHBTuvNKeYh17,w207h139.jpg'
  },
  {
    id: 'news-38',
    title: 'Ukarać Zjednoczone Emiraty Arabskie. Dubaj ukrywa majątki oligarchów',
    description:
      'Europejscy politycy wzywają do wpisania Zjednoczonych Emiratów Arabskich na czarną listę z powodu niepowodzeń kraju w walce z przepływem brudnych pieniędzy i egzekwowaniu sankcji nałożonych na rosyjskich oligarchów w związku z inwazją Rosji na...',
    img: 'https://www.wykop.pl/cdn/c3397993/link_1654974876QLhYTtgVgg3HH4f9yAv8h2,w207h139.jpg'
  }
]

export const mockComments: IComment[] = [
  {
    id: 'comment-1',
    articleId: 'news-3',
    author: 'John',
    score: 55,
    created: new Date('01/01/2022 12:00'),
    content: 'Awesome'
  },
  {
    id: 'comment-2',
    articleId: 'news-3',

    author: 'Merry',
    created: new Date('01/01/2022 12:20'),
    score: 76,
    content: 'Awesome 2'
  },
  {
    id: 'comment-3',
    articleId: 'news-3',
    score: -3,
    author: 'Johnny',
    created: new Date('01/01/2022 12:20'),
    content: 'Awesome 5',
    children: [
      {
        id: 'comment-3-1',
        articleId: 'news-3',

        author: 'Jenny',
        created: new Date('02/01/2022 14:22'),
        content: 'Lorem ipsum'
      }
    ]
  }
]
