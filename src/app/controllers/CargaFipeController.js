const Marcas = require("../models/Marcas");
const SubCategory = require("../models/SubCategory");
const Class_table = require("../models/Class_table");
const Modelos = require("../models/Modelos");

class CargaFipe {
  async carga(req, res, next) {
    try {
      const all = await Marcas.findAll({
        attributes: ["id", "tipo", "name"]
      });

      all.map(async marca => {
        const { subcategory_id } = await SubCategory.findOne({
          attributes: ["subcategory_id"],
          where: {
            type_id: marca.tipo
          }
        });

        if (subcategory_id) {
          const existeClass = await Class_table.findOne({
            where: { subcategory_id: subcategory_id, class_id_ext: marca.id }
          });

          if (!existeClass) {
            await Class_table.create({
              class_desc: marca.name,
              subcategory_id: subcategory_id,
              class_id_ext: marca.id,
              type_id: marca.tipo
            });
          }
        }
      });

      const allModels = await Modelos.findAll({
        attributes: ["id", "tipo", "id_marca", "id_marca_modelo", "name"],
        order: [["id_marca", "ASC"]]
      });

      let id_marca_aux = 0;

      allModels.map(async (modelos, id_marca_aux) => {
        if (id_marca_aux != modelos.id_marca) {
          id_marca_aux = modelos.id_marca;
          const { class_id } = await Class_table.findOne({
            attributes: ["class_id"],
            where: {
              class_id_ext: id_marca_aux
            }
          });

          console.log(`Marca ${id_marca_aux} é o classid ${class_id}`);
        }

        // const { subcategory_id } = await SubCategory.findOne({
        //       attributes: ["subcategory_id"],
        //       where: {
        //       type_id: marca.tipo
        //       }
        //  });

        //   if (subcategory_id) {
        //     const existeClass = await Class_table.findOne({
        //       where: { subcategory_id: subcategory_id, class_id_ext: marca.id }
        //     });

        //     if (!existeClass) {
        //       await Class_table.create({
        //         class_desc: marca.name,
        //         subcategory_id: subcategory_id,
        //         class_id_ext: marca.id,
        //         type_id: marca.tipo
        //       });
        //     }
        //   }
      });

      return res.json(allModels);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

module.exports = new CargaFipe();
