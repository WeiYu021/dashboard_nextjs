'use client';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleSearch = useDebouncedCallback((term) => {
    // console.log(term);
    // console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        // 提示符，告诉用户期望输入什么类型的数据，一般显示为灰色
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // 根据?query=的内容初始化输入框内容
        // ?.是可选链操作符，用于在searchParams.get('query')不存在时避免抛出错误
        // 为什么在某些情况下使用 defaultValue 而不是 value：
        // value 属性用于在受控组件中设置和更新输入框的值。
        // defaultValue 属性用于设置非受控组件的初始值。
        // 初始值设置：如果你想要设置一个初始值，但是之后不打算控制输入框的值，使用 defaultValue 是合适的。
        // 避免状态更新：在某些情况下，你可能不希望每次用户输入时都触发状态更新，尤其是在性能敏感的场景下。
        // URL参数或服务器数据：如果你的输入框值是从URL参数或服务器获取的，并且在组件挂载时设置一次就足够了，那么使用 defaultValue 更合适。
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
