import os
import zipfile
import xml.etree.ElementTree as ET

def get_docx_text(path):
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml')
        document.close()
        tree = ET.XML(xml_content)
        WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        PARA = WORD_NAMESPACE + 'p'
        TEXT = WORD_NAMESPACE + 't'
        paragraphs = []
        for paragraph in tree.iter(PARA):
            texts = [node.text for node in paragraph.iter(TEXT) if node.text]
            if texts:
                paragraphs.append(''.join(texts))
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error: {e}"

folder = r'd:\.gemini\msajce college website final\college datas'
out_file = r'd:\.gemini\msajce college website final\college_datas_extracted.txt'

with open(out_file, 'w', encoding='utf-8') as out:
    for file in os.listdir(folder):
        if file.endswith('.docx'):
            out.write(f"\n\n{'='*40}\nFILE: {file}\n{'='*40}\n\n")
            text = get_docx_text(os.path.join(folder, file))
            out.write(text)
