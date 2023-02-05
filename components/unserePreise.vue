<template>
  <div class="unsere-preise">
    <h2 style="margin-bottom: 0">Unsere Preise</h2>
    <p
      style="
        margin-top: 0;
        text-transform: uppercase;
        color: #a48242;
        margin-bottom: 100px;
      "
    >
      stand 22.01.2023
    </p>

    <preisliste
      v-for="(liste, key) in Preisliste"
      :preisliste="liste"
      :key="key"
    ></preisliste>

    <span class="preis-notice">
      *Alle Preise inkl. MwSt. und zzgl. Friseurzubehör. Alle Preise sind
      Richtwerte. Die tatsächlichen Preise erfragen Sie bitte bei Ihrem Friseur.
    </span>
  </div>
</template>

<script>
export default {
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
              Preis: "35",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Schneiden, Föhnen Mittel",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSF Mittel",
              Preis: "45",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Schneiden, Föhnen Lang ",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WSF Lang",
              Preis: "55",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Splisschnitt ",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "Splisschnitt",
              Preis: "35",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Föhnen Kurz",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF Kurz",
              Preis: "30",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Föhnen Mittel",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF Mittel",
              Preis: "35",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Föhnen Lang",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WF Lang ",
              Preis: "45",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Neuschnitt / Starke Veränderung Mittel",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "NS Mittel",
              Preis: "65",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
            {
              Leistung: "Neuschnitt / Starke Veränderung Lang",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "NS Lang",
              Preis: "75",
              Steuersatz: "19",
              Dauer: "90 Min",
            },
            {
              Leistung: "Waschen, Föhnen Stylen Mittel",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WFS Mittel",
              Preis: "45",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Waschen, Föhnen Stylen Lang",
              Leistungsgruppe: "Damen - Schnitt & Styling",
              Abkürzung: "WFS Lang",
              Preis: "55",
              Steuersatz: "19",
              Dauer: "45 Min",
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
              Preis: "45",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Ansatzfarbe mit Längenveredelung Mittel",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsLäMittel",
              Preis: "65",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Ansatzfarbe mit Längenveredelung Lang",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsLäLang",
              Preis: "75",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Glossing ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "Glossing",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Abmattierung nach Strähnen ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AbmaNaSträ",
              Preis: "30",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Ansatzsträhnen Oberkopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsOK",
              Preis: "65",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Ansatzsträhnen Halber Kopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsHK",
              Preis: "75",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Ansatzsträhnen Ganzer Kopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnsGk",
              Preis: "85",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
            {
              Leistung: "Strähnen mit Längenausgleich Oberkopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "SträLäOK",
              Preis: "80",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Strähnen mit Längenausgleich  Halber Kopf ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "SträLäHK",
              Preis: "95",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
            {
              Leistung: "Strähnen mit Längenausgleich  Ganzer Kopf",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "SträLäGK",
              Preis: "110",
              Steuersatz: "19",
              Dauer: "90 Min",
            },
            {
              Leistung: "jede weitere Strähnenfarbe ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "JeWeSträ",
              Preis: "10",
              Steuersatz: "19",
            },
            {
              Leistung: "Ansatzblondierung + Abmattierung ",
              Leistungsgruppe: "Farben & Strähnen ",
              Abkürzung: "AnBloAbm",
              Preis: "80",
              Steuersatz: "19",
              Dauer: "120 Min",
            },
            {
              Leistung: "Balayage ",
              Leistungsgruppe: "Balayage ",
              Abkürzung: "Balayage",
              Preis: "ab 230",
              Steuersatz: "19",
              Dauer: "90 Min",
            },
            {
              Leistung: "Beratungstermin",
              Leistungsgruppe: "Balayage",
              Abkürzung: "Beratung",
              Preis: "15",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
          ],
        },
        {
          Titel: "Extensions",
          leistungen: [
            {
              Leistung: "Extensions einsetzen ",
              Leistungsgruppe: "Haarverlängerung ",
              Abkürzung: "ExEin",
              Preis: "41",
              Steuersatz: "19",
            },
            {
              Leistung: "Extensions rausnehmen ",
              Leistungsgruppe: "Haarverlängerung ",
              Abkürzung: "ExRaus",
              Preis: "41",
              Steuersatz: "19",
            },
            {
              Leistung: "Extensions hochsetzen und Föhnen ",
              Leistungsgruppe: "Haarverlängerung ",
              Abkürzung: "ExHoFö",
              Preis: "110",
              Steuersatz: "19",
            },
            {
              Leistung: "sonstige Anwendungen ",
            },
            {
              Leistung: "Keratin express ",
              Leistungsgruppe: "Sonstige Anwendungen",
              Abkürzung: "KeraEx",
              Preis: "35",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Haarbotox ",
              Leistungsgruppe: "Sonstige Anwendungen",
              Abkürzung: "Haarbotox",
              Preis: "auf Anfrage ",
              Steuersatz: "19",
            },
            {
              Leistung: "Hochstecken, Stylen je angebrochene halbe Stunde",
              Abkürzung: "Hochste",
              Preis: "40",
              Steuersatz: "19",
              Dauer: "30 Min",
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
              Preis: "10",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Augenbrauen Wachsen ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "AugenWax",
              Preis: "12",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Augenbrauen Färben ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "AugenFa",
              Preis: "12",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Wimpern Färben ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "WimFa",
              Preis: "14",
              Steuersatz: "19",
              Dauer: "15 min",
            },
            {
              Leistung: "Damenbart mit Wachs ",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "DamBaWa",
              Preis: "10",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Tagesmake-up",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "MaUpTag",
              Preis: "ab 40",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Abendmake-up",
              Leistungsgruppe: "Kosmetische Behandlungen ",
              Abkürzung: "MaUpAbend",
              Preis: "ab 50",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
          ],
        },
        {
          Titel: "Herrenhaarschnitt",
          leistungen: [
            {
              Leistung: "Classic Cut (waschen, schneiden, styling)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeWSS",
              Preis: "34",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Fresh-up (Übergänge an den Seiten)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeFresh",
              Preis: "28",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Clipper Cut (2 Längen am gesamten Kopf)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeCC2",
              Preis: "18",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Clipper Cut (1 Länge am gesamten Kopf)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeCC1",
              Preis: "16",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Haarkranz (nur Seitenbereich)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeHK",
              Preis: "14",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
          ],
        },
        {
          Titel: "Bartpflege",
          leistungen: [
            {
              Leistung: "Konturen rasieren (mit dem Messer)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeBK",
              Preis: "7",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Bartpflege (kürzen und Rasieren)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeBP",
              Preis: "16",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung:
                "Bartpflege mit hot towel (Warmes Handtuch und Rasierschaum)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeBPHT",
              Preis: "20",
              Steuersatz: "19",
              Dauer: "30 Min",
            },
            {
              Leistung: "Nassrasur (komplett Bartrasur mit warmen Handtuch)",
              Leistungsgruppe: "Herren - Schnitt & Styling ",
              Abkürzung: "HeNassr",
              Preis: "22",
              Steuersatz: "19",
              Dauer: "30 min",
            },
            {
              Leistung: "Eyebrow Shave",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeEyeSH",
              Preis: "6",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Eybrow treading (Fadentechnik und Pinzette)",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeEyeTR",
              Preis: "12",
              Steuersatz: "19",
              Dauer: "15 Min",
            },
            {
              Leistung: "Ohrenhaare + Nasenhaare",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeOH/NA",
              Preis: "6",
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
              Preis: "45",
              Steuersatz: "19",
              Dauer: "45 min",
            },
            {
              Leistung:
                "Clipper Cut & Beard Trim (Eine oder Zwei Längen & Rasur)",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeKoCLI/BEA",
              Preis: "30",
              Steuersatz: "19",
              Dauer: "45 Min",
            },
            {
              Leistung: "Haircut, Beard Trim & Eyebrow treading ",
              Leistungsgruppe: "Herren - Schnitt & Styling",
              Abkürzung: "HeKoHBEye",
              Preis: "53",
              Steuersatz: "19",
              Dauer: "60 Min",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.unsere-preise {
  margin-top: 200px;
}

.preis-notice {
  color: var(--text-color);
}

@media (max-width: 1000px) {
  .unsere-preise {
    margin-top: 100px;
  }
}
</style>