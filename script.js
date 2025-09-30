const sections = {
  "Misión": "Somos un centro educativo de carácter privado, dirigido por profesionales de la educación, comprometidos en ofrecer a la sociedad del corregimiento de cascajal municipio de Magangué, una educación formal integral desde el nivel Pre – escolar Y la Básica, con base a los principios pedagógicos de  María Montessori y Lev Vygotski. yRealiza su Misión permitiendo, el desarrollo humano integral y construcción del conocimiento, en todas las áreas del saber; con un enfoque personalizado, científico, investigativo, social y ecológico procurando defender el patrimonio ambiental, artístico y cultural del país.    ",
  "Visión": "Hacia el 2030  Seremos  un centro educativo  reconocido en toda la población del Cascajal corregimiento del municipio de Magangué, como  formadores de los nuevos ciudadanos  procurando el fortalecimiento y desarrollo humano integral de sus estudiantes, la democratización del conocimiento, la construcción de una cultura de PAZ, respeto por la VIDA y dignidad de la persona, conciencia ecológica y apropiación de los principios de la educación personalizada: Singularidad, Autonomía, Apertura y Trascendencia, siendo referente de calidad humana y excelencia educativa; con un nuevo modelo de escuela que desde el currículo, ajustado a las tendencias e impacto de  una sociedad interconectada digital; la innovación y articulación de las TIC en los procesos de enseñanza e investigación, en procura de consolidar un proyecto de vida con identidad",
  "Contacto": "Dirección: CLL 18 NO 10B - 36, Magangué, Bolívar\nTel: +570000000000\nEmail: ceducrecerex@gmail.com",
  "Redes Sociales": `Síguenos en Instagram:<br>
<a href="https://www.instagram.com/ceducrecerex/" target="_blank">Instagram</a>`,
  "Organigrama": `<img src="img/organigrama.png" alt="Organigrama" style="max-width:100%; height:auto;">`
}; 

// Generar menú
const menu = document.getElementById("menu");
const content = document.getElementById("content");

Object.keys(sections).forEach((sectionName, index) => {
  const li = document.createElement("li");
  li.textContent = sectionName;

  li.addEventListener("click", () => {
    content.innerHTML = `
      <h2>${sectionName}</h2>
      <p>${sections[sectionName].replace(/\n/g, "<br>")}</p>
    `;
  });

  menu.appendChild(li);

  // Mostrar primera sección al inicio
  if (index === 0) {
    content.innerHTML = `
      <h2>${sectionName}</h2>
      <p>${sections[sectionName]}</p>
    `;
  }
});