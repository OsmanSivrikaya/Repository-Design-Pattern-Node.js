module.exports = class BaseRepository {
  constructor(model) {
    this._model = model;
  }

  getAllAsync = async () => {
    try {
      return await this._model.find({});
    } catch (error) {
      throw error;
    }
  };

  getAsync = async (id) => {
    return await this._model.findById(id);
  };

  addAsync = async (body) => {
    return await this._model.create(body);
  };

  updateAsync = async (id, body) => {
    return await this._model.findByIdAndUpdate(
      id, // Güncellenecek belgenin kimliği
      { $set: body }, //// Güncelleme işlemi için kullanılacak veri
      { new: true }, // Güncellenmiş belgeyi döndürmesi için seçenek
    );
  };

  removeAsync = async (id) => {
    return await this._model.findByIdAndDelete(id);
  };
};
