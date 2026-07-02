<template>
  <div class="unsere-preise">
    <p class="uppercase text-gold-600">stand 01.07.2026</p>

    <preisliste
      v-for="(liste, key) in filteredPreisliste"
      :preisliste="liste"
      :key="key"
    ></preisliste>

    <span class="text-sm">
      *Alle Preise inkl. MwSt. und zzgl. Friseurzubehör. Alle Preise sind
      Richtwerte. Die tatsächlichen Preise erfragen Sie bitte bei Ihrem Friseur.
    </span>
  </div>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data: () => {
    return {
      Preisliste: [
        {
          Titel: "Damen",
          leistungen: [
            {
              Leistung: "Waschen, Schneiden, Föhnen Mittel",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSF Mittel",
              Preis: "ab 65,00 €",
              Steuersatz: 19,
              Dauer: 50,
            },
            {
              Leistung: "Waschen, Schneiden, Föhnen Lang",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSF Lang",
              Preis: "ab 75,00 €",
              Steuersatz: 19,
              Dauer: 60,
            },
            {
              Leistung: "Waschen, Schneiden, Föhnen XL",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSF XL",
              Preis: "ab 85,00 €",
              Steuersatz: 19,
              Dauer: 70,
            },
            {
              Leistung: "Waschen, Föhnen Mittel",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF Mittel",
              Preis: "ab 39,00 €",
              Steuersatz: 19,
              Dauer: 30,
            },
            {
              Leistung: "Waschen, Föhnen Lang",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF Lang",
              Preis: "ab 49,00 €",
              Steuersatz: 19,
              Dauer: 45,
            },
            {
              Leistung: "Waschen,Föhnen XL",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF XL",
              Preis: "ab 59,00 €",
              Steuersatz: 19,
              Dauer: "",
            },
            {
              Leistung: "Neuschnitt / Starke Veränderung",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "NS Lang",
              Preis: "ab 87,00 €",
              Steuersatz: 19,
              Dauer: 90,
            },
          ],
        },
        {
          Titel: "Coloration",
          leistungen: [
            {
              Leistung: "Ansatzfarbe",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "Ansatz",
              Preis: "ab 57,00 €",
              Steuersatz: 19,
              Dauer: 30,
            },
            {
              Leistung: "Ansatzfarbe mit Längenveredelung Mittel",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "AnsLäMittel",
              Preis: "ab 77,00 €",
              Steuersatz: 19,
              Dauer: 30,
            },
            {
              Leistung: "Ansatzfarbe mit Längenveredelung Lang",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "AnsLäLang",
              Preis: "ab 87,00 €",
              Steuersatz: 19,
              Dauer: 45,
            },
            {
              Leistung: "Glossing",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "Glossing",
              Preis: "ab 38,00 €",
              Steuersatz: 19,
              Dauer: 30,
            },
            {
              Leistung: "",
              Leistungsgruppe: "",
              Abkürzung: "",
              Preis: "",
              Steuersatz: "",
              Dauer: "",
            },
            {
              Leistung: "Ansatzsträhnen Oberkopf",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "AnsOK",
              Preis: "ab 77,00 €",
              Steuersatz: 19,
              Dauer: 30,
            },
            {
              Leistung: "Ansatzsträhnen Halber Kopf",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "AnsHK",
              Preis: "ab 87,00 €",
              Steuersatz: 19,
              Dauer: 45,
            },
            {
              Leistung: "Ansatzsträhnen Ganzer Kopf",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "AnsGk",
              Preis: "ab 97,00 €",
              Steuersatz: 19,
              Dauer: 60,
            },
            {
              Leistung: "Strähnen mit Längenausgleich Oberkopf",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "SträLäOK",
              Preis: "ab 92,00 €",
              Steuersatz: 19,
              Dauer: 45,
            },
            {
              Leistung: "Strähnen mit Längenausgleich  Halber Kopf",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "SträLäHK",
              Preis: "ab 107,00 €",
              Steuersatz: 19,
              Dauer: 60,
            },
            {
              Leistung: "Strähnen mit Längenausgleich  Ganzer Kopf",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "SträLäGK",
              Preis: "ab 122,00 €",
              Steuersatz: 19,
              Dauer: 90,
            },
            {
              Leistung: "Faceraming",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "FR",
              Preis: "ab 45,00 €",
              Steuersatz: 19,
              Dauer: 30,
            },
            {
              Leistung: "jede weitere Strähnenfarbe",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "JeWeSträ",
              Preis: "ab 13,00 €",  
              Steuersatz: 19,
              Dauer: 0,
            },
            {
              Leistung: "Olaplex",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "Olaplex",
              Preis: "ab 40,50 €",
              Steuersatz: 19,
              Dauer: 0,
            },
            {
              Leistung: "Assistenz",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "ASS",
              Preis: "Kostenfrei",
              Steuersatz: 19,
              Dauer: 0,
            },
            {
              Leistung: "Abspülen",
              Leistungsgruppe: "Farben & Strähnen",
              Abkürzung: "ABS",
              Preis: "Kostenfrei",
              Steuersatz: 19,
              Dauer: 45,
            },
          ],
        },
        {
          Titel: "Balayage",
          leistungen: [
            {
              Leistung: "Balayage",
              Leistungsgruppe: "Balayage",
              Abkürzung: "Balayage",
              Preis: "ab 265,00 €",
              Steuersatz: 19,
              Dauer: 90,
            },
            {
              Leistung: "Beratungstermin",
              Leistungsgruppe: "Balayage",
              Abkürzung: "Beratung",
              Preis: "ab 15,00 €",
              Steuersatz: 19,
              Dauer: 15,
            },
          ],
        },
        {
          Titel: "Extensions",
          leistungen: [
            {
              Leistung: "Beratungstermin",
              Leistungsgruppe: "Haarverlängerung",
              Abkürzung: "Beratung",
              Preis: "ab 15,00 €",
              Steuersatz: 19,
              Dauer: 15,
            },
            {
              Leistung: "Extensions rausnehmen",
              Leistungsgruppe: "Haarverlängerung",
              Abkürzung: "ExRaus",
              Preis: "ab 47,00 €",
              Steuersatz: 19,
              Dauer: 30,
            },
            {
              Leistung: "Extensions hochsetzen und Föhnen (VL)",
              Leistungsgruppe: "Haarverlängerung",
              Abkürzung: "ExHoFöVL",
              Preis: "ab 187,50 €",
              Steuersatz: 19,
              Dauer: 90,
            },
            {
              Leistung: "Extensions hochsetzen und Föhnen (V)",
              Leistungsgruppe: "Haarverlängerung",
              Abkürzung: "ExHoFöVD",
              Preis: "ab 137,50 €",
              Steuersatz: 19,
              Dauer: 60,
            },
          ],
        },
        {
          Titel: "Kosmetische Behandlungen",
          leistungen: [
            {
              Leistung: "Augenbrauen Zupfen mit Pinzette",
              Leistungsgruppe: "Kosmetische Behandlungen",
              Abkürzung: "AugenZU",
              Preis: "ab 14,00 €",
              Steuersatz: 19,
              Dauer: 15,
            },
            {
              Leistung: "Augenbrauen zupfen mit dem Faden",
              Leistungsgruppe: "Kosmetische Behandlungen",
              Abkürzung: "AugenFad",
              Preis: "ab 18,00 €",
              Steuersatz: 19,
              Dauer: 15,
            },
            {
              Leistung: "Augenbrauen Färben",
              Leistungsgruppe: "Kosmetische Behandlungen",
              Abkürzung: "AugenFa",
              Preis: "ab 14,00 €",
              Steuersatz: 19,
              Dauer: 15,
            },
            {
              Leistung: "Wimpern Färben",
              Leistungsgruppe: "Kosmetische Behandlungen",
              Abkürzung: "WimFa",
              Preis: "ab 16,00 €",
              Steuersatz: 19,
              Dauer: 15,
            },
            {
              Leistung: "Lashlifting",
              Leistungsgruppe: "Kosmetische Behandlungen",
              Abkürzung: "LL",
              Preis: "ab 72,00 €",
              Steuersatz: 19,
              Dauer: 75,
            },
            {
              Leistung: "Browlifting",
              Leistungsgruppe: "Kosmetische Behandlungen",
              Abkürzung: "BL",
              Preis: "ab 49,00 €",    
              Steuersatz: 19,
              Dauer: 45,
            },
            {
              Leistung: "Lash- & Browlifting",
              Leistungsgruppe: "Kosmetische Behandlungen",
              Abkürzung: "LB",
              Preis: "ab 118,00 €",
              Steuersatz: 19,
              Dauer: 90,
            },
            /* {
                Leistung: "Tagesmake-up",
                Leistungsgruppe: "Kosmetische Behandlungen ",
                Abkürzung: "MaUpTag",
                Preis: "40",
                Steuersatz: "19",
                Dauer: "45 Min",
              },
              {
                Leistung: "Abendmake-up",
                Leistungsgruppe: "Kosmetische Behandlungen ",
                Abkürzung: "MaUpAbend",
                Preis: "50",
                Steuersatz: "19",
                Dauer: "60 Min",
              },
              {
                Leistung: "Hochstecken, Stylen je angebrochene halbe Stunde",
                Leistungsgruppe: "Kosmetische Behandlungen ",
                Abkürzung: "Hochste",
                Preis: "40",
                Steuersatz: "19",
                Dauer: "60 Min",
              }, */
          ],
        },
        {
          Titel: "Sonstige Anwendungen",
          leistungen: [
            {
              Leistung: "Keratin express",
              Leistungsgruppe: "Sonstige Anwendungen",
              Abkürzung: "KeraEx",
              Preis: "ab 36,50 €",
              Steuersatz: 19,
              Dauer: 15,
            },
          ],
        },
        /* {
          Titel: "Herrenhaarschnitt",
          leistungen: [
            {
              Leistung: "Classic Cut (waschen, schneiden, styling)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeWSS",
              Preis: "38,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Classic Cut & Beard Trim (Haarschnitt & Bart)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeKoCLA/BEA",
              Preis: "51,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Haircut, Beard Trim & Eyebrow treading",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeKoCLA/BEA",
              Preis: "61,00 €",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
            {
              Leistung: "Clipper Cut (1 Länge am gesamten Kopf)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeCC1",
              Preis: "19,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Clipper Cut (2 Längen am gesamten Kopf)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeCC2",
              Preis: "21,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Clipper Cut & Beard Trim (1 o. 2 Längen & Rasur)",
              Leistungsgruppe: "Eine oder zwei Längen und Rasur.",
              Abkürzung: "HeCC2",
              Preis: "38,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Fresh-up (Übergänge an den Seiten)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeFresh",
              Preis: "31,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Haarkranz (nur Seitenbereich)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeHK",
              Preis: "17,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Dauerwelle Oberkopf",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "DW",
              Preis: "ab 125,00 €",
              Steuersatz: "19",
              Dauer: "120 Min",
            },
          ],
        },
        {
          Titel: "Bartpflege",
          leistungen: [
            {
              Leistung: "Konturen rasieren (mit dem Messer)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeHK",
              Preis: "9,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Bartpflege (kürzen und Rasieren)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeBP",
              Preis: "19,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung:
                "Bartpflege mit hot towel (Warmes Handtuch und Rasierschaum)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeBPHT",
              Preis: "25,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Nassrasur (komplett Bartrasur mit warmen Handtuch)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeNassr",
              Preis: "29,00 €",
              Steuersatz: "19",
              Dauer: "30 min",
            },
            {
              Leistung: "Eyebrow Shave",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeEyeSH",
              Preis: "7,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Eybrow treading (Fadentechnik und Pinzette)",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeEyeTR",
              Preis: "14,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Ohrenhaare + Nasenhaare",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeOH/NA",
              Preis: "7,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
          ],
        },
        {
          Titel: "Kombi Paket",
          leistungen: [
            {
              Leistung:
                "Classic Cut & Beard Trim (Haarschnitt und Bart kürzen & Rasieren)",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeKoCLA/BEA",
              Preis: "51,00 €",
              Steuersatz: "19",
              Dauer: "45 min",
            },
            {
              Leistung:
                "Clipper Cut & Beard Trim (Eine oder Zwei Längen & Rasur)",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeKoCLI/BEA",
              Preis: "38,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Haircut, Beard Trim & Eyebrow treading ",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeKoHBEye",
              Preis: "61,00 €",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
          ],
        }, */
      ],
    };
  },
  computed: {
    filteredPreisliste() {
      if (this.sections.length === 0) {
        return this.Preisliste;
      }
      return this.Preisliste.filter((item) => {
        return this.sections.includes(item.Titel);
      });
    },
  },
};
</script>

<style></style>
