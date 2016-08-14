Чтобы редактировать расширение нужно установить addon sdk.

После установки sdk, заходим в папку %sdk-name%/bin, в ней открываем консоль (пишем в адресной сроке cmd), вводим команду activate. 
Строка ввода изменится, в начале в скобках будет путь к sdk.
Если получаем ошибку связанную с питоном, ищем решение на stackoverflow, надо починить путь к питону в одном из .bat файлов.(или установить питон, если еще не установили)

Затем преходим в папку проекта (cd %путь_к_папке%)
В папке проекта можно выполнять команды cfx run, cfx test, cfx xpi и другие, cfx --help для списка.

lib/main.js - основной код расширения, где создается кнопка и отправляется сообщение в content.js




cfx xpi упаковывает расширение. xpi - тот же zip, его можно открыть и редактировать. В нем есть install.rdf, в него следует добавить локализацию:

<!-- Localized strings -->
    <em:localized>
      <Description>
        <em:locale>ru-RU</em:locale>
        <em:name>Tab Sidebar</em:name>
        <em:description>Zeigt in einer Sidebar Vorschaubilder der Inhalte aller offenen Tabs an.</em:description>
      </Description>
    </em:localized>


