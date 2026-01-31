import { PDFDocument } from "pdf-lib";
import fs from "fs";

const templatePath = "/Users/jeffy/muse-dungeon/public/dnd_5e_character_sheet.pdf";
const outputPath = "/Users/jeffy/Downloads/test_pdf_export_v3.pdf";

async function testPDFExport() {
  try {
    const templateBytes = fs.readFileSync(templatePath);
    const pdfDoc = await PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();

    // Simple helper - just set text, no font manipulation
    const setTextField = (fieldName, value) => {
      try {
        const field = form.getTextField(fieldName);
        field.setText(value);
        console.log(`Set ${fieldName}`);
      } catch (e) {
        console.log(`Field error: ${fieldName} - ${e.message}`);
      }
    };

    // Basic info
    setTextField("CharacterName", "Thorin Ironforge");
    setTextField("ClassLevel", "Fighter 5");
    setTextField("Background", "Soldier");
    setTextField("Race ", "Dwarf");

    // Multiline fields - same helper, just set text
    setTextField("ProficienciesLang", "Languages: Common, Dwarvish\n\nArmor: Light, Medium, Heavy, Shields\nWeapons: Simple, Martial");
    setTextField("PersonalityTraits ", "I face problems head-on. A simple, direct solution is the best path to success.");
    setTextField("Ideals", "Greater Good. Our lot is to lay down our lives in defense of others.");
    setTextField("Bonds", "I would still lay down my life for the people I served with.");
    setTextField("Flaws", "I have little respect for anyone who is not a proven warrior.");
    setTextField("Feat+Traits", "Fighting Style: Defense\n+1 bonus to AC while wearing armor.\n\nSecond Wind\nRegain 1d10+5 HP as bonus action (short rest recharge).\n\nAction Surge\nTake one additional action (short rest recharge).\n\nExtra Attack\nAttack twice when taking Attack action.");
    setTextField("Equipment", "Chain mail\nShield\nExplorer's pack\nBackpack\n50 feet of rope");
    setTextField("Backstory", "Born in the mountain fortress of Ironforge, Thorin served twenty years in the King's Guard before leaving to seek adventure. His military training made him a skilled warrior, but it was the loss of his regiment that drives him now.");
    setTextField("Allies", "The Ironforge Regiment - Though scattered, former members remain loyal to each other.\n\nKing Thrain III - The dwarven king who Thorin once served.");

    // NO updateFieldAppearances() - let PDF template defaults handle fonts

    // Flatten the form
    form.flatten();

    // Save
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPath, pdfBytes);

    console.log(`\nPDF saved to: ${outputPath}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

testPDFExport();
