jQuery(document).ready(function($){
    $('#example').DataTable({
      language: {
        lengthMenu: "T'en veux _MENU_ par page",
        info: "T'es bigleux ? c'est la page _PAGE_ sur _PAGES_",
        search: "Cherche bouffon !",
        paginate: {
          first:      "Premier",
          last:       "Précédent",
          next:       "Suivant",
          previous:   "Dernier"
        }
      }
    });
  });