import { FC, ReactNode } from "react";
import AntdMarkdown from "@/components/AntdMarkdown";
import { Block } from "@/components/UI/Block";

const markdown = `# Quod bracchia Hyperione Aello furentem clavigeram Terea

## Videbar Herculeae

Lorem markdownum veniam! Visum tibi et: comites nostra stimulis obstitit aratra
de.

1. Magicae iussisque valens
2. Tutius nunc Aethionque alieni sanguine
3. Satyri dubia passim iuga
4. Summe in formosi
5. Et fluens euntque versi

Bibit [iter canet exstanti](http://www.ocyroen.io/) et visaque simul vivere
perlucentibus corymbis Phrixeaque famae Bacchum utque pars munera. Iacchus non
minis, formidine Averna nisi, sic teque ego pectore tendit est in pennis
videntem traxit!

## Altrici tempora senilis paulatimque vivebat clarum

Sincera ipsas, sanguine, hic optatos hominum telluris erat vincis denique. Nox
haec! Victoris et vimque iubet, sunt aevum hostis, Temesaea et fuerat partem
templa totusque omnia; capillos amabam. Sed fuerat, bene reddidit: sollicita et
monte erit facies parentem sine bella excipiunt!

Iam dabant Cinyran quoque bello de acies pugnat voluit mundo nosti. Chromin
sederat, gelidos aperti. Phaethon phocae loco citharae Talia sed et quos fruges
corpus. Sine Ismario, standi et comas infectum ferunt invecta Auram stagna urbes
quod. Figurae admovit ventis agros recuset flebant caeruleam excutit denique:
teloque viso nec infelix rugis, veteres.

\`\`\`
const Lecture: FC = () => (
  <input type="text">
  <Block>
    <AntdMarkdown>{markdown}</AntdMarkdown>
  </Block>
);

export default Lecture;
\`\`\`.
<input type="text" placeholder="Введите текст здесь">
<input type="text" placeholder="Nекст здесь">
> Sortis habebat creditur; **oppida**, et voce. His *tibi iuranda secedere*
> cupies non quodque molimina esto, callidus sumptis. Hydrae laterique illius,
> *non* formam [fuit](http://sicmari.com/culmine.html), sollicitatque iubet.
> Bracchia differt Phrygiis fronte. Nostra fratrem curvique clarus verterit
> vestigia imagine prima, nec gramina guttae perpetuum praeferre inspicitur et
> est, tu!

Magis favilla. Pro caelo videndi, et acutae bello acta fratri Astraea, iam!`;

const Lecture: FC = () => (
  <Block>
    <AntdMarkdown>{markdown}</AntdMarkdown>
  </Block>
);

export default Lecture;
