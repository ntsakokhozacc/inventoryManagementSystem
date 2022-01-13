module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      description: String,
      sku: String,
      price: Number,
      stock: Number

    },
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};