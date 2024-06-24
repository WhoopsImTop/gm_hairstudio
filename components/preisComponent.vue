<template>
  <div class="unsere-preise">
    <p
      class="uppercase text-gold-600"
    >
      stand 01.11.2023
    </p>

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
              Leistung: "Waschen, Schneiden, Föhnen Kurz",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSF Kurz",
              Preis: "40,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Schneiden, Föhnen Mittel",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSF Mittel",
              Preis: "55,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Schneiden, Föhnen Lang ",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSF Lang",
              Preis: "65,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Waschen, Schneiden, Föhnen XL ",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSFXL",
              Preis: "75,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Splisschnitt ",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "Splisschnitt",
              Preis: "35,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Föhnen Kurz",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF Kurz",
              Preis: "30,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Föhnen Mittel",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF Mittel",
              Preis: "35,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Föhnen Lang",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF Lang ",
              Preis: "45,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Waschen, Föhnen XL",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WFXL ",
              Preis: "50,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Neuschnitt / Starke Veränderung Lang",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "NS Lang",
              Preis: "80,00 €",
              Steuersatz: "19",
              Dauer: "90 Min",
            },
          ],
        },
        {
          Titel: "Coloration",
          leistungen: [
            {
              Leistung: "Ansatzfarbe",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "Ansatz",
              Preis: "50,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Ansatzfarbe mit Längenveredelung Mittel",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsLäMittel",
              Preis: "70,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Ansatzfarbe mit Längenveredelung Lang",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsLäLang",
              Preis: "80,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Glossing ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "Glossing",
              Preis: "30,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Abmattierung nach Strähnen ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AbmaNaSträ",
              Preis: "30,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Ansatzsträhnen Oberkopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsOK",
              Preis: "70,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Ansatzsträhnen Halber Kopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsHK",
              Preis: "80,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Ansatzsträhnen Ganzer Kopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsGk",
              Preis: "90,00 €",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
            {
              Leistung: "Strähnen mit Längenausgleich Oberkopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "SträLäOK",
              Preis: "85,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Strähnen mit Längenausgleich  Halber Kopf ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "SträLäHK",
              Preis: "100,00 €",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
            {
              Leistung: "Strähnen mit Längenausgleich  Ganzer Kopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "SträLäGK",
              Preis: "115,00 €",
              Steuersatz: "19",
              Dauer: "90 Min",
            },
            {
              Leistung: "Faceraming ",
              Leistungsgruppe: "",
              Abkürzung: "FR",
              Preis: "40,00 €",
              Steuersatz: "19",
            },
            {
              Leistung: "jede weitere Strähnenfarbe ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "JeWeSträ",
              Preis: "10,00 €",
              Steuersatz: "19",
            },
            {
              Leistung: "Ansatzblondierung + Abmattierung ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnBloAbm",
              Preis: "80,00 €",
              Steuersatz: "19",
              Dauer: "120 Min",
            },
            {
              Leistung: "Olaplex ",
              Leistungsgruppe: "",
              Abkürzung: "Olaplex",
              Preis: "40,00 €",
              Steuersatz: "19",
              Dauer: "120 Min",
            },
            {
              Leistung: "Olaplex / K18 + Keratin Express",
              Abkürzung: "K/0+K",
              Preis: "65,00 €",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
          ],
        },
        {
          Titel: "Balayage",
          leistungen: [
            {
              Leistung: "Balayage ",
              Leistungsgruppe: "Balayage ",
              Abkürzung: "Balayage",
              Preis: "ab 230,00 €",
              Steuersatz: "19",
              Dauer: "90 Min",
            },
            {
              Leistung: "Beratungstermin",
              Leistungsgruppe: "",
              Abkürzung: "Beratung",
              Preis: "15,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
          ],
        },
        {
          Titel: "Extensions",
          leistungen: [
            {
              Leistung: "Extensions",
              Leistungsgruppe: "Haarverlängerung ",
              Abkürzung: "ExEin",
              Preis: "auf Anfrage",
              Steuersatz: "19",
            },
            {
              Leistung: "Extensions Beratungstermin",
              Leistungsgruppe:
                "Je nach Dienstleistung verlangen wir eine Anzahlung.",
              Abkürzung: "ExEin",
              Preis: "20,00 €",
              Steuersatz: "19",
            },
            {
              Leistung: "Extensions rausnehmen ",
              Leistungsgruppe: "Haarverlängerung ",
              Abkürzung: "ExRaus",
              Preis: "45,00 €",
              Steuersatz: "19",
            },
            {
              Leistung: "Extensions hochsetzen und Föhnen (V)",
              Leistungsgruppe: "Haarverlängerung ",
              Abkürzung: "ExHoFöVD",
              Preis: "135,00 €",
              Steuersatz: "19",
            },
            {
              Leistung: "Extensions hochsetzen und Föhnen (VL)",
              Leistungsgruppe: "Haarverlängerung ",
              Abkürzung: "ExHoFöVL",
              Preis: "185,00 €",
              Steuersatz: "19",
            },
            {
              Leistung: "sonstige Anwendungen ",
            },
            {
              Leistung: "Keratin express ",
              Leistungsgruppe: "Sonstige Anwendungen",
              Abkürzung: "KeraEx",
              Preis: "35,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Haarbotox ",
              Leistungsgruppe: "Sonstige Anwendungen",
              Abkürzung: "Haarbotox",
              Preis: "auf Anfrage",
              Steuersatz: "19",
            },
          ],
        },
        {
          Titel: "Kosmetische Behandlungen",
          leistungen: [
            {
              Leistung: "Augenbrauen Zupfen mit Pinzette ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "AugenZU",
              Preis: "10,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Augenbrauen Wachsen ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "AugenWax",
              Preis: "12,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Augenbrauen Färben ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "AugenFa",
              Preis: "12,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Wimpern Färben ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "WimFa",
              Preis: "14,00 €",
              Steuersatz: "19",
              Dauer: "15 min",
            },
            {
              Leistung: "Damenbart mit Wachs ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "DamBaWa",
              Preis: "10,00 €",
              Steuersatz: "19",
              Dauer: "15 Min",
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
            {
              Leistung: "Lashlifting",
              Leistungsgruppe: "Lashlifting, Keratin und Wimpernfarbe",
              Abkürzung: "LL",
              Preis: "65,00 €",
              Steuersatz: "19",
              Dauer: "75 Min",
            },
            {
              Leistung: "Browlifting",
              Leistungsgruppe: "Browlifting, formen und färben",
              Abkürzung: "LL",
              Preis: "45,00 €",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Lash- & Browlifting",
              Leistungsgruppe:
                "Lashlifting + Browlifting ( Wimpernfarbe,Keratin,formen und Augenbrauenfarbe)",
              Abkürzung: "LL",
              Preis: "100,00 €",
              Steuersatz: "19",
              Dauer: "90 Min",
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

<style>
</style>
