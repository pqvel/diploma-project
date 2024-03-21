"use client";
import { FC, ReactNode } from "react";
import AntdMarkdown from "@/components/AntdMarkdown";
import { Block } from "@/components/UI/Block";

const markdown = `# Quis inquit

## Loco tegens quorum cum Hecabe structa usum

Lorem markdownum, flectitur servet [et duo inductaque](http://www.illi-mei.net/)
pavens recens. Hesperien murra auras stagnum: ordine retinens locus.

    function createUser(username: string, password: string) {
        console.log(username)
        console.log(password)
    }

## Fiducia Maenalon longa sumptaque Euboicam festaque aurea

Ancipitemque voce: utinamque me pars imis nuda videtur qui ecce. Dum crimen nunc
ubi Hesperidas tamen Iuppiter perdere illuc subsidere simul fortunae huc __cadis
cum__. Casside expediunt siccis suo gladio rapax vestras et acerno carpunt
pilas. Pronusque flammam [per](http://mare.net/postquam) Corythi armigerae
reliquit quem: olorinis decipit, et quia nec. Di Esse neque atque esse faciem
deum timenda, *times* unum cur resolvit *deorum*, macies somnoque adest
torrentur.

\`\`\`
// созданин переменной
var isa_font_sequence = dvrOffice;
if (flash) {
    web_user_cable.crossplatform(localhostPublishing(ip_wizard_inkjet,
            615799));
    sidebarParse += parse(72);
}
if (graphicBotnet) {
    flowchart = sli(digitalUnitIsdn);
}
\`\`\`
## Gramen laesaque deduxit deposuitque

Bis induit, repetam tot *ulli* prosunt divisque anhelitus pinguesque caecae?
Tamen est erat Lycaeo: Iris dissimulator dedit nunc, exspectatum *remis*.

    if (ibmDesktopSink(floodStringIcio)) {
        socialLink += abend_client_printer;
        dma.router_spam_secondary(olap(duplex));
        isa(1, 80);
    } else {
        wCell /= exportDebug(botnetLatency(surface, install_gnu), opacity,
                default);
    }
    if (parity != file) {
        dtd = 5 / ram;
        ibm_petaflops_interface.page_webcam_intellectual(-2, spooling,
                thread.ddlFlowchart.olap(hibernate));
    }
    if (configuration) {
        xp(clob, queue_switch(server));
        consolePrimaryFlops = whois(kindle_mask_virtual + 3, resolution_codec(
                botnet_fddi_word), atmIcioSound);
        party_chipset(ppi_access_nic(-2, loadPpc, root_cpu_throughput), 2);
    } else {
        soa -= management_hertz(rdf_dbms_payload, jquery_zif - hypermediaSyntax,
                scareware);
        systemHashtag += hexadecimal - rgb_contextual;
    }
    remote_cps(data);

## Membra cava sim Amoris frigida es palude

Ancora bis asper vertice heros caput muneris; puer deprendere emittite Somnus.
Abdidit matutina, lene ingentique __nulla__, dum qualis deviaque sinunt,
__tellus ante Lyrnesia__ currus. Per et ore ille sua pascere mater. Tu et
Maeoniaeque armo verruntur illud aconiton quereris fertur et aequor vincula
caligine, vineta urbes contra, victum. Vitae nec publica infelix experientia
ablata neque [ut hosti](http://incenduntque.net/)!

[Penates profanus](http://modo-et.net/proelia.php) ingenti, ab intabescitque
__ulmo__ promittit statione suum, et vos Naxoque in. Rex vertit perstat Phrygia
tremit nostri, non et inpedienda. Ait e moratus natus sustulerat adsuetus
*inmota suae* parte, est non membra imagine gravitate, truculenta. Frustra
admissum magico metam Phoebo tristitiam regna, ac aut huius: per. Aere si,
[simplex](http://apertos.io/), cupidine manibus Inarimen, te mota, quod mihi
peregit nata Oeneus.

`;

const Lecture: FC = () => (
  <Block>
    <AntdMarkdown>{markdown}</AntdMarkdown>
  </Block>
);

export default Lecture;
