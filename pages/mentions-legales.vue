<template>
  <div>
    <div class="wrapper-inputs flex flex-col gap-4 w-[450px]">
      <input
        type="text"
        v-model="society.name"
        placeholder="Nom de la societé"
      />
      <input type="text" v-model="society.address" placeholder="Adresse" />
      <input
        type="text"
        v-model="society.code"
        placeholder="Code postal + ville"
      />
      <input type="text" v-model="society.phone" placeholder="Téléphone" />
      <input type="text" v-model="society.mail" placeholder="Mail" />
      <input type="text" v-model="society.link" placeholder="Lien site web" />
    </div>
    <hr class="my-10" />
    <button
      class="bg-orangency text-white py-2 px-4 rounded-md"
      @click="copyContents"
    >
      Copier mentions légales
    </button>
    <div class="mt-6">
      <div id="tocopy" ref="toCopy">
        <p style="margin-bottom: 1em">
          {{ society.name }}<br />{{ society.address }}<br />{{ society.code
          }}<br />Tel:
          {{ society.phone }}
        </p>
        <p style="margin-bottom: 1em">
          <strong>Gestionnaire du site internet</strong> : {{ society.name }}
        </p>
        <p style="margin-bottom: 1em">
          <strong>Conception – réalisation</strong> : NANCOMCY, une marque
          commerciale ALEO AGENCY, Société par Actions Simplifiée dont le siège
          social est au 1 Passage Annette Zelman 54000 NANCY, inscrite sous le
          numéro 800 525 602 RCS NANCY *
        </p>
        <p style="margin-bottom: 1em">
          <strong>L’hébergeur du site</strong> : WP SERVEUR, 134 Avenue du
          président Wilson – 93100 MONTREUIL
        </p>
        <p style="margin-bottom: 1em">
          <strong>Téléphone</strong> : 09 72 49 72 64
        </p>
        <p style="margin-bottom: 1em">&nbsp;</p>
        <h2 style="font-size: 35px; font-weight: 700">1. Propriété</h2>
        <p style="margin-bottom: 1em">
          Tous contenus du présent Site, y compris les textes, les images fixes
          ou animées, bases de données, programmes, cgi, etc., constituent la
          propriété exclusive de {{ society.name }} ou de ses ayants droits et
          sont protégés par le droit d’auteur ou tout autre droit de propriété
          intellectuelle ou industrielle. Tous droits non expressément
          mentionnés aux présentes ne vous sont pas concédés.
        </p>
        <p style="margin-bottom: 1em">&nbsp;</p>
        <h2 style="font-size: 35px; font-weight: 700">
          2. Informatique et libertés
        </h2>
        <p style="margin-bottom: 1em">
          Les informations recueillies vous concernant sont indispensables pour
          poursuivre la communication et soumettre nos actualités et nos
          évolutions, à la suite de votre inscription volontaire par email. Ces
          données personnelles nominatives sont confidentielles et font l’objet
          d’un traitement informatique. Elles sont conservées et utilisées
          exclusivement par l’éditeur du site, à des fins d’enquêtes
          statistiques, d’opérations commerciales et de marketing. Conformément
          à la Loi modifiée ” Informatique et Libertés ” n° 78-17 du 6 janvier
          1978, vous disposez d’un droit d’accès et de rectification des données
          vous concernant (Déclaration CNIL enregistrée sous le numéro 2006907).
          Vous pouvez également, pour des motifs légitimes, vous opposer au
          traitement des données vous concernant.
        </p>
        <p style="margin-bottom: 1em">
          Pour exercer ce droit, s’adresser :<br />– Par courrier postal à :
          {{ society.name }}, {{ society.address }} – {{ society.code }}
        </p>
        <p style="margin-bottom: 1em">
          – Par courriel à :
          <a :href="'mailto:' + society.mail">{{ society.mail }}</a>
        </p>
        <p style="margin-bottom: 1em">&nbsp;</p>
        <h2 style="font-size: 35px; font-weight: 700">
          3. Crédits photos et autres visuels
        </h2>
        <p style="margin-bottom: 1em">
          Les photographies et visuels présents sur le site
          {{ society.link }} ne peuvent être reproduits, redistribués ou vendus,
          sans l’accord écrit de l’éditeur. Toute image utilisée sans le
          consentement de l’auteur du cliché pourra donc faire l’objet de
          poursuites légales.
        </p>
        <p style="margin-bottom: 1em">
          Sauf mention contraire, les droits de copyright des documents et
          chacun des éléments créés pour ce « site » sont la propriété exclusive
          de l’Editeur du site. Toute reproduction totale ou partielle du
          contenu du site est donc prohibée, au sens de l’article L.713-2 du
          Code de la propriété intellectuelle. Les lois gouvernant ce site sont
          les lois françaises et les Tribunaux compétents sont les tribunaux
          français.
        </p>
        <p style="margin-bottom: 1em">&nbsp;</p>
        <h2 style="font-size: 35px; font-weight: 700">4. Responsabilité</h2>
        <p style="margin-bottom: 1em">
          L’Editeur du site met tout en œuvre pour assurer l’exactitude et la
          mise à jour de l’ensemble des informations fournies sur son site qui y
          est directement relié mais l’Editeur ne peut garantir que les
          informations qu’il contient sont complètes, précises, exactes,
          exhaustives et dépourvues de toute erreur.
        </p>
        <p style="margin-bottom: 1em">
          L’Editeur du site se réserve le droit de corriger ou de modifier, à
          tout moment et sans préavis, le contenu de ce site.
        </p>
        <p style="margin-bottom: 1em">
          L’Editeur du site décline toute responsabilité concernant les
          informations disponibles sur son « site » et l’utilisation qui peut
          être faite des informations contenues sur ce site ou obtenues en
          réponse à une question posée par le biais de ce site. En aucun cas
          l’Editeur ne pourra être tenu pour responsable des dommages de toute
          nature, directs ou indirects, qui résulterait de l’utilisation de ce
          site ou en relation avec ce site. De manière générale, l’Editeur du
          site décline toute responsabilité quant à l’utilisation que pourrait
          être faite de ce site.
        </p>
        <p style="margin-bottom: 1em">
          Toute tentative de transfert d’information vers un site tiers ou de
          modification des informations contenues sur ce site est interdite et
          peut entraîner des poursuites civiles ou pénales de la part de
          l’Editeur du site.
        </p>
        <p style="margin-bottom: 1em">
          L’Editeur du site ne pourra être tenu responsable de l’ensemble des
          hypertextes ou de tout autre élément informatique utilisé, directement
          ou indirectement, à partir du « site », l’existence d’un lien n’ayant
          pas pour effet de transférer la responsabilité à l’Editeur.
        </p>
        <p style="margin-bottom: 1em">
          L’Editeur du site ne garantit pas et ne prend aucun engagement
          concernant des sites tiers et ne sera pas responsable de leur contenu.
          Il est strictement interdit de créer un lien hypertexte renvoyant sur
          le site sans l’accord officiel de l’Editeur du site. L’Editeur du site
          ne peut pas garantir et ne garantit pas que le serveur accueillant le
          « site » est exempt de virus et que les fichiers accessibles par
          téléchargement sur ce site Web ou tout autre site tiers sont dépourvus
          de virus ou d’erreurs de fonctionnement. Dans la mesure où des virus
          peuvent être transmis via Internet, nous recommandons aux utilisateurs
          de prendre les mesures nécessaires afin de protéger leur ordinateur
          contre toute intrusion, contre tout problème technique qui pourrait
          endommager les composants de l’ordinateur de l’utilisateur ou des
          données qui pourraient y être stockées. En tout état de cause,
          l’Editeur du site ou un de ses sous-traitants ne pourra être
          responsable d’un dommage quelconque pouvant se produire lors de la
          connexion et de la navigation sur le site.
        </p>
        <p style="margin-bottom: 1em">&nbsp;</p>
        <h2 style="font-size: 35px; font-weight: 700">5. Les cookies</h2>
        <p style="margin-bottom: 1em">
          Conformément à l’article 32-II de la loi du 6 janvier 1978, modifié
          par l’ordonnance n°2011-1012 du 24 août 2011, le site
          {{ society.name }} demande préalablement le consentement des visiteurs
          afin d’autoriser le dépôt et la lecture de cookies sur son terminal et
          les informe de la finalité des cookies.
        </p>
        <p style="margin-bottom: 1em">
          La durée de validité de ce consentement est de 13 mois maximum.
        </p>
        <p style="margin-bottom: 1em">&nbsp;</p>
        <h2 style="font-size: 35px; font-weight: 700">6. Liens hypertextes</h2>
        <p style="margin-bottom: 1em">
          Toute tentative de transfert d’information vers un site tiers ou de
          modification des informations contenues sur ce site est interdite et
          peut entraîner des poursuites civiles ou pénales de la part de
          l’Editeur du site.
        </p>
        <p style="margin-bottom: 1em">
          L’Editeur du site ne pourra être tenu responsable de l’ensemble des
          liens hypertextes ou de tout autre élément informatique utilisé,
          directement ou indirectement, à partir du « site ».
        </p>
        <p style="margin-bottom: 1em">
          L’Editeur du site ne garantit pas et ne prend aucun engagement
          concernant des sites tiers et ne sera pas responsable de leur contenu.
        </p>
        <p style="margin-bottom: 1em">
          Si vous souhaitez réaliser un lien avec le site GODDYN’S vous devez
          contacter au préalable l’Editeur du site afin d’obtenir l’autorisation
          nécessaire, en envoyant un courrier à l’adresse postale suivante:
        </p>
        <p style="margin-bottom: 1em">
          {{ society.name }}, {{ society.address }} – {{ society.code }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Clipboard } from "v-clipboard";

const society = reactive({
  name: "",
  address: "",
  code: "",
  phone: "",
  mail: "",
  link: "",
});

const toCopy = ref(null);

const copyContents = () => {
  const htmlCode = document.getElementById("tocopy").innerHTML;
  const type = "text/plain";
  const blobInput = new Blob([htmlCode], { type });
  navigator.clipboard.write([new ClipboardItem({ [type]: blobInput })]);
};
</script>
<style lang="postcss" scoped>
input {
  @apply border-[1px] border-gray-300 rounded-sm py-1 px-2;
}
</style>
