using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Specifications;

namespace Core.Interfaces
{

    //specifying that T can only use the model we created, which all inherit 
    //the base entity class
    public interface iGenericRepository<T> where T: BaseEntity
    {
         Task<T> GetByIdAsync(int id);
         Task<IReadOnlyList<T>> ListAllAsync();
         Task<T> GetEntityWithSpec(iSpecification<T> spec);
         Task<IReadOnlyList<T>> ListAsync(iSpecification<T> spec);
         
    }
}